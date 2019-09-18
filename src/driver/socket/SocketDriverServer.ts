import Driver from '../../core/Driver';
import Socket from './Socket';
import Unsubscribe from '../../core/Unsubscribe';
import QueryDescriptor from './QueryDescriptor';
import { DocumentSnapshotData } from './SocketDocumentSnapshot';
import { getDoc, getCollection, getQuery } from './utilities';
import Actions, {
  QuerySnapshotData,
  ActionNames,
  ActionArgsOf,
} from './Actions';
import uuid from 'uuid';
import DocumentReference from '../../core/DocumentReference';
import Query from '../../core/Query';
import DocumentSnapshot from '../../core/DocumentSnapshot';
import QuerySnapshot from '../../core/QuerySnapshot';

function decodeDocumentSnapshot<T>(
  snapshot: DocumentSnapshot<T>,
): DocumentSnapshotData<T> | undefined {
  if (!snapshot.exists()) return undefined;

  const { data, createTime, updateTime } = snapshot;

  return {
    data,
    createTime: createTime.toMillis(),
    updateTime: updateTime.toMillis(),
  };
}

function decodeQuerySnapshot<T>(
  snapshot: QuerySnapshot<T>,
): QuerySnapshotData<T> {
  const docs = snapshot.docs.map(doc => {
    const { type, newIndex, oldIndex } = doc;

    return {
      path: doc.ref.path,
      change: { type, newIndex, oldIndex },
      snapshot: decodeDocumentSnapshot(doc),
    };
  });

  return { docs };
}

export default class SocketDriverServer implements Actions {
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
    const snapshot = await getQuery<T>(this.driver, path, descriptors).get();

    const docs = snapshot.docs.map(doc => {
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

      const { data, createTime, updateTime } = doc;

      return {
        path: ref.path,
        change,
        snapshot: {
          data,
          createTime: createTime.toMillis(),
          updateTime: updateTime.toMillis(),
        },
      };
    });

    return { docs };
  }

  private readonly unsubscribes = new Map<string, Unsubscribe>();

  private async subscribe<T, U extends Query<T> | DocumentReference<T>>(
    ref: U,
    decoder: (
      snapshot: T,
    ) => DocumentSnapshotData<T> | QuerySnapshotData<T> | undefined,
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

  async documentGet<T>(
    path: string,
  ): Promise<{ snapshot?: DocumentSnapshotData<T> }> {
    const snapshot = await getDoc<T>(this.driver, path).get();
    if (!snapshot.exists()) return {};

    const { data, createTime, updateTime } = snapshot;

    return {
      snapshot: {
        data,
        createTime: createTime.toMillis(),
        updateTime: updateTime.toMillis(),
      },
    };
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
