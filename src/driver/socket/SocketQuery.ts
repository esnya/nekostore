import Query, { OrderDirection, WhereOperator } from '../../core/Query';
import SocketDriverSocket from './SocketDriver';
import DocumentReference from '../../core/DocumentReference';
import QuerySnapshot from '../../core/QuerySnapshot';
import Unsubscribe from '../../core/Unsubscribe';
import QueryDescriptor from './QueryDescriptor';
import SocketDocumentChange, {
  DocumentChangeData,
} from './SocketDocumentChange';
import { getDoc } from './utilities';
import { DocumentSnapshotData } from './SocketDocumentSnapshot';

export default class SocketQuery<T> implements Query<T> {
  constructor(
    driver: SocketDriverSocket,
    id: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parent?: DocumentReference<any>,
    descriptors: QueryDescriptor[] = [],
  ) {
    this.driver = driver;
    this.id = id;
    this.parent = parent;
    this.descriptors = descriptors;
  }

  readonly driver: SocketDriverSocket;
  readonly id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly parent?: DocumentReference<any>;
  readonly descriptors: QueryDescriptor[];

  get path(): string {
    return this.parent ? `${this.parent.path}/${this.id}` : this.id;
  }

  private chain(descriptor: QueryDescriptor): SocketQuery<T> {
    return new SocketQuery(this.driver, this.id, this.parent, [
      ...this.descriptors,
      descriptor,
    ]);
  }

  endAt<U>(...values: U[]): Query<T> {
    return this.chain({ type: 'endAt', values });
  }
  endBefore<U>(...values: U[]): Query<T> {
    return this.chain({ type: 'endBefore', values });
  }
  limit(limit: number): Query<T> {
    return this.chain({ type: 'limit', limit });
  }
  orderBy(field: string, direction?: OrderDirection): Query<T> {
    return this.chain({ type: 'orderBy', field, direction });
  }
  startAfter<U>(...values: U[]): Query<T> {
    return this.chain({ type: 'startAfter', values });
  }
  startAt<U>(...values: U[]): Query<T> {
    return this.chain({ type: 'startAt', values });
  }
  where<U>(field: string, operator: WhereOperator, value: U): Query<T> {
    return this.chain({ type: 'where', field, operator, value });
  }

  async get(): Promise<QuerySnapshot<T>> {
    const snapshot = await this.driver.request(
      'queryGet',
      this.path,
      this.descriptors,
    );

    const docs = snapshot.docs.map(doc => {
      const ref = getDoc<T>(this.driver, doc.path);
      return new SocketDocumentChange<T>(ref, doc.change, doc.snapshot as
        | DocumentSnapshotData<T>
        | undefined);
    });

    return {
      ref: this,
      docs,
    };
  }

  async onSnapshot(
    onNext: (snapshot: QuerySnapshot<T>) => void,
  ): Promise<Unsubscribe> {
    const { subscriberId } = await this.driver.request(
      'querySubscribe',
      this.path,
      this.descriptors,
    );
    const unsubscribe = this.driver.socket.on(
      `snapshot:${subscriberId}`,
      (snapshot: {
        docs: {
          path: string;
          change: DocumentChangeData;
          snapshot?: DocumentSnapshotData<T>;
        }[];
      }): void => {
        const docs = snapshot.docs.map(doc => {
          const ref = getDoc<T>(this.driver, doc.path);
          return new SocketDocumentChange<T>(ref, doc.change, doc.snapshot);
        });
        onNext({
          ref: this,
          docs,
        });
      },
    );
    return async (): Promise<void> => {
      await unsubscribe();
      this.driver.request('unsubscribe', subscriberId);
    };
  }
}