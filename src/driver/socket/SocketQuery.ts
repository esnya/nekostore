import Query, { OrderDirection, WhereOperator } from '../../Query';
import SocketDriverSocket from './SocketDriver';
import DocumentReference from '../../DocumentReference';
import QuerySnapshot from '../../QuerySnapshot';
import Unsubscribe from '../../Unsubscribe';
import QueryDescriptor from './QueryDescriptor';
import SocketDocumentChange from './SocketDocumentChange';
import { getDoc } from './utilities';
import { DocumentSnapshotData } from './SocketDocumentSnapshot';
import { QuerySnapshotData } from './Actions';

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

  endAt<U>(value: U): Query<T> {
    return this.chain({ type: 'endAt', value });
  }
  endBefore<U>(value: U): Query<T> {
    return this.chain({ type: 'endBefore', value });
  }
  limit(limit: number): Query<T> {
    return this.chain({ type: 'limit', limit });
  }
  orderBy(field: string, direction?: OrderDirection): Query<T> {
    return this.chain({ type: 'orderBy', field, direction });
  }
  startAfter<U>(value: U): Query<T> {
    return this.chain({ type: 'startAfter', value });
  }
  startAt<U>(value: U): Query<T> {
    return this.chain({ type: 'startAt', value });
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
    const event = `snapshot:${subscriberId}`;
    const listener = (snapshot: QuerySnapshotData<T>): void => {
      const docs = snapshot.docs.map(doc => {
        const ref = getDoc<T>(this.driver, doc.path);
        return new SocketDocumentChange<T>(ref, doc.change, doc.snapshot);
      });
      onNext({
        ref: this,
        docs,
      });
    };
    this.driver.socket.on(event, listener);
    return async (): Promise<void> => {
      this.driver.socket.off(event, listener);
      this.driver.request('unsubscribe', subscriberId);
    };
  }
}
