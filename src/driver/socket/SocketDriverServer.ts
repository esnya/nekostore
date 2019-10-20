import Driver from '../../Driver';
import Socket from './Socket';
import Unsubscribe from '../../Unsubscribe';
import QueryDescriptor from './impl/QueryDescriptor';
import { getDoc, getCollection, getQuery } from './impl/utilities';
import Actions, {
  QuerySnapshotData,
  ActionNames,
  ActionArgsOf,
} from './impl/Actions';
import uuid from 'uuid';
import DocumentReference from '../../DocumentReference';
import Query from '../../Query';
import DocumentSnapshot from '../../DocumentSnapshot';
import QuerySnapshot from '../../QuerySnapshot';
import { SnapshotOf } from '../../types';

function decodeDocumentSnapshot<T>(
  snapshot: DocumentSnapshot<T>,
): T | undefined {
  if (!snapshot.exists()) return undefined;

  const { data } = snapshot;

  return data;
}

function decodeQuerySnapshot<T>(
  snapshot: QuerySnapshot<T>,
): QuerySnapshotData<T> {
  const docs = snapshot.docs.map(doc => {
    const { type, newIndex, oldIndex } = doc;

    return {
      path: doc.ref.path,
      change: { type, newIndex, oldIndex },
      data: decodeDocumentSnapshot(doc),
    };
  });

  return { docs };
}

/**
 * Server implementation for SocketDriver that mediates other drivers.
 */
export default class SocketDriverServer implements Actions {
  /**
   * @param driver Intermediary driver.
   * @param socket Socket that communicates with the client.
   */
  constructor(driver: Driver, socket: Socket) {
    this.driver = driver;
    this.socket = socket;

    [
      this.queryGet,
      this.querySubscribe,
      this.collectionAdd,
      this.documentGet,
      this.documentSet,
      this.documentUpdate,
      this.documentDelete,
      this.documentSubscribe,
      this.unsubscribe,
    ].forEach(action => {
      this.socket.on(
        `action:${action.name}`,
        async (requestId: string, ...args: ActionArgsOf<ActionNames>) => {
          // console.log({ action: action.name, args, requestId });
          try {
            const result = await this[action.name](...args);
            this.socket.emit(`result:${requestId}`, null, result);
          } catch (error) {
            console.error(error);
            const { code, message } = error;
            this.socket.emit(`result:${requestId}`, {
              code: code || 'internal-server-error',
              message,
            });
          }
        },
      );
    });
  }

  readonly driver: Driver;
  readonly socket: Socket;

  destroy(): void {
    this.unsubscribes.forEach(u => u());
  }

  async queryGet<T>(
    path: string,
    descriptors: QueryDescriptor[],
  ): Promise<QuerySnapshotData<T>> {
    const items = await getQuery<T>(this.driver, path, descriptors).get();

    const docs = items.docs.map(doc => {
      const { ref, type, newIndex, oldIndex } = doc;
      const change = {
        type,
        newIndex,
        oldIndex,
      };

      if (!doc.exists()) {
        return {
          path: ref.path,
          change,
        };
      }

      const { data } = doc;

      return {
        path: ref.path,
        change,
        data,
      };
    });

    return { docs };
  }

  private readonly unsubscribes = new Map<string, Unsubscribe>();

  private async subscribe<T, U extends Query<T> | DocumentReference<T>>(
    ref: U,
    decoder: (snapshot: SnapshotOf<U>) => T | QuerySnapshotData<T> | undefined,
  ): Promise<{ subscriberId }> {
    const subscriberId = uuid.v4();

    const unsubscribe = await ref.onSnapshot(snapshot => {
      this.socket.emit(`snapshot:${subscriberId}`, decoder(snapshot));
    });
    this.unsubscribes.set(subscriberId, unsubscribe);
    return { subscriberId };
  }

  async unsubscribe<T>(subscriberId: string): Promise<void> {
    const unsubscribe = this.unsubscribes.get(subscriberId);
    if (!unsubscribe) return;

    this.unsubscribes.delete(subscriberId);
    await unsubscribe();
  }

  async querySubscribe<T>(
    path: string,
    descriptors: QueryDescriptor[],
  ): Promise<{ subscriberId: string }> {
    return this.subscribe(
      getQuery<T>(this.driver, path, descriptors),
      decodeQuerySnapshot,
    );
  }

  async collectionAdd<T>(path: string, data: T): Promise<{ id: string }> {
    const { id } = await getCollection<T>(this.driver, path).add(data);
    return { id };
  }

  async documentGet<T>(path: string): Promise<T | undefined> {
    const snapshot = await getDoc<T>(this.driver, path).get();
    if (!snapshot.exists()) return undefined;
    return snapshot.data;
  }

  async documentSet<T>(path: string, data: T): Promise<void> {
    await getDoc<T>(this.driver, path).set(data);
  }

  async documentUpdate<T>(path: string, data: Partial<T>): Promise<void> {
    await getDoc<T>(this.driver, path).update(data);
  }

  async documentDelete<T>(path: string): Promise<void> {
    await getDoc<T>(this.driver, path).delete();
  }

  async documentSubscribe<T>(path: string): Promise<{ subscriberId: string }> {
    return await this.subscribe(
      getDoc<T>(this.driver, path),
      decodeDocumentSnapshot,
    );
  }
}
