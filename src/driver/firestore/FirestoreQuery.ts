import Query, { WhereOperator, OrderDirection } from '../../core/Query';
import FirestoreDocumentChange from './FirestoreDocumedntChange';
import QuerySnapshot from '../../core/QuerySnapshot';
import Unsubscribe from '../../core/Unsubscribe';

function encodeQuerySnapshot<T>(
  ref: Query<T>,
  snapshot: firebase.firestore.QuerySnapshot,
): QuerySnapshot<T> {
  const docs = snapshot
    .docChanges()
    .map(doc => new FirestoreDocumentChange<T>(doc));

  return {
    ref,
    docs,
  };
}

export default class FirestoreQuery<T> implements Query<T> {
  constructor(ref: firebase.firestore.Query) {
    this.ref = ref;
  }

  readonly ref: firebase.firestore.Query;

  endAt<U>(...values: U[]): Query<T> {
    return new FirestoreQuery<T>(this.ref.endAt(...values));
  }
  endBefore<U>(...values: U[]): Query<T> {
    return new FirestoreQuery<T>(this.ref.endBefore(...values));
  }
  limit(limit: number): Query<T> {
    return new FirestoreQuery<T>(this.ref.limit(limit));
  }
  orderBy(field: string, direction?: OrderDirection): Query<T> {
    return new FirestoreQuery<T>(this.ref.orderBy(field, direction));
  }
  startAfter<U>(...values: U[]): Query<T> {
    return new FirestoreQuery<T>(this.ref.startAfter(...values));
  }
  startAt<U>(...values: U[]): Query<T> {
    return new FirestoreQuery<T>(this.ref.startAt(...values));
  }
  where<U>(field: string, operator: WhereOperator, value: U): Query<T> {
    return new FirestoreQuery<T>(this.ref.where(field, operator, value));
  }

  async get(): Promise<QuerySnapshot<T>> {
    return encodeQuerySnapshot<T>(this, await this.ref.get());
  }
  onSnapshot(onNext: (value: QuerySnapshot<T>) => void): Unsubscribe {
    return this.ref.onSnapshot(snapshot => {
      onNext(encodeQuerySnapshot<T>(this, snapshot));
    });
  }
}
