import QuerySnapshot from './QuerySnapshot';
import Unsubscribe from './Unsubscribe';

export type OrderDirection = 'asc' | 'desc';
export type WhereOperator = '==' | '<' | '<=' | '>' | '>=';

export default interface Query<T> {
  endAt<U>(...values: U[]): Query<T>;
  endBefore<U>(...values: U[]): Query<T>;
  limit(limit: number): Query<T>;
  orderBy(field: string, direction?: OrderDirection): Query<T>;
  startAfter<U>(...values: U[]): Query<T>;
  startAt<U>(...values: U[]): Query<T>;
  where<U>(field: string, operator: WhereOperator, value: U): Query<T>;

  get(): Promise<QuerySnapshot<T>>;
  onSnapshot(onNext: (snapshot: QuerySnapshot<T>) => void): Unsubscribe;
}
