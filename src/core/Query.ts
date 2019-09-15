import QuerySnapshot from './QuerySnapshot';
import Unsubscribe from './Unsubscribe';
import DocumentSnapshot from './DocumentSnapshot';

export type OrderDirection = 'asc' | 'desc';
export type WhereOperator = '==' | '<' | '<=' | '>' | '>=';

export default interface Query<T> {
  endAt(snapshot: DocumentSnapshot<T>): Query<T>;
  endBefore(snapshot: DocumentSnapshot<T>): Query<T>;
  limit(limit: number): Query<T>;
  orderBy(field: string, direction?: OrderDirection): Query<T>;
  startAfter(snapshot: DocumentSnapshot<T>): Query<T>;
  startAt(snapshot: DocumentSnapshot<T>): Query<T>;
  where<U>(field: string, operator: WhereOperator, value: U): Query<T>;

  get(): Promise<QuerySnapshot<T>>;
  onSnapshot(onNext: (snapshot: QuerySnapshot<T>) => void): Unsubscribe;
}
