import uuid from 'uuid';
import Socket from './Socket';
import Driver from '../../core/Driver';
import CollectionReference from '../../core/CollectionReference';
import ClientCollectionReference from './SocketCollectionReference';
import NekostoreError from '../../core/NekostoreError';
import { ActionNames, ActionReturnTypeOf, ActionArgsOf } from './Actions';

export interface Options {
  socket: Socket;
  timeout?: number;
}

export default class SocketDriver implements Driver {
  constructor(options: Options) {
    this.socket = options.socket;
    this.timeout = options.timeout || 1000;
  }

  readonly socket: Socket;
  readonly timeout: number;

  collection<T>(id: string): CollectionReference<T> {
    return new ClientCollectionReference<T>(this, id);
  }

  request<Action extends ActionNames>(
    action: Action,
    ...args: ActionArgsOf<Action>
  ): Promise<ActionReturnTypeOf<Action>> {
    const requestId = uuid.v4();
    // console.debug('Request', { action, args, requestId });

    return new Promise((resolve, reject): void => {
      const unsubscribe = this.socket.once(
        `result:${requestId}`,
        (
          error: { code?: string; message: string } | null,
          result: ActionReturnTypeOf<Action>,
        ) => {
          // console.debug('RequestResult', {
          //   action,
          //   args,
          //   requestId,
          //   error,
          //   result,
          // });
          if (error) {
            return reject(
              new NekostoreError(error.code || 'unknown', error.message),
            );
          }
          return resolve(result);
        },
      );

      setTimeout(async () => {
        unsubscribe();
        reject(
          new NekostoreError('timeout', `${action} timed out ${requestId}`),
        );
      }, this.timeout);

      this.socket.emit(`action:${action}`, requestId, ...args);
    });
  }
}
