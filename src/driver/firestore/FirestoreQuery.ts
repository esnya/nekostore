import Query, { WhereOperator, OrderDirection } from '../../Query';
import FirestoreDocumentChange from './FirestoreDocumedntChange';
import QuerySnapshot from '../../QuerySnapshot';
import Unsubscribe from '../../Unsubscribe';

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

  endAt<U>(value: U): Query<T> {
    return new FirestoreQuery<T>(this.ref.endAt(value));
  }
  endBefore<U>(value: U): Query<T> {
    return new FirestoreQuery<T>(this.ref.endBefore(value));
  }
  limit(limit: number): Query<T> {
    return new FirestoreQuery<T>(this.ref.limit(limit));
  }
  orderBy(field: string, direction?: OrderDirection): Query<T> {
    return new FirestoreQuery<T>(this.ref.orderBy(field, direction));
  }
  startAfter<U>(value: U): Query<T> {
    return new FirestoreQuery<T>(this.ref.startAfter(value));
  }
  startAt<U>(value: U): Query<T> {
    return new FirestoreQuery<T>(this.ref.startAt(value));
  }
  where<U>(field: string, operator: WhereOperator, value: U): Query<T> {
    return new FirestoreQuery<T>(this.ref.where(field, operator, value));
  }

  async get(): Promise<QuerySnapshot<T>> {
    return encodeQuerySnapshot<T>(this, await this.ref.get());
  }
  async onSnapshot(
    onNext: (value: QuerySnapshot<T>) => void,
  ): Promise<Unsubscribe> {
    const unsubscribe = this.ref.onSnapshot(snapshot => {
      onNext(encodeQuerySnapshot<T>(this, snapshot));
    });
    return async (): Promise<void> => {
      unsubscribe();
    };
  }
}
