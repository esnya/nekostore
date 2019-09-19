import QuerySnapshot from './QuerySnapshot';
import Unsubscribe from './Unsubscribe';

export type OrderDirection = 'asc' | 'desc';
export type WhereOperator = '==' | '<' | '<=' | '>' | '>=';

/**
 * Query of the collection reference.
 */
export default interface Query<T> {
  /**
   * Sort documents.
   * @param field Path for the field seperated by '.'.
   * @param direction Order direction e.g. 'asc', 'desc'.
   */
  orderBy(field: string, direction?: OrderDirection): Query<T>;

  /**
   * Specify end poisiton by field value. Use after orderBy.
   * @param value Value of field specified wity orderBy.
   */
  endAt<U>(value: U): Query<T>;

  /**
   * Specify end poisiton by field value. Use after orderBy.
   * @param value Value of field specified wity orderBy.
   */
  endBefore<U>(value: U): Query<T>;

  /**
   * Specify start poisiton by field value. Use after orderBy.
   * @param value Value of field specified wity orderBy.
   */
  startAfter<U>(value: U): Query<T>;

  /**
   * Specify start poisiton by field value. Use after orderBy.
   * @param value Value of field specified wity orderBy.
   */
  startAt<U>(value: U): Query<T>;

  /**
   * Limit number of documents.
   */
  limit(limit: number): Query<T>;

  /**
   * Filter documents by specified operator.
   * @param field Path for the field separated by '.'.
   * @param operator Operator for compararison e.g. '==', '<', '<=', '>', '>='
   * @param value Rvalue for comparison.
   */
  where<U>(field: string, operator: WhereOperator, value: U): Query<T>;

  /**
   * Get a snapshot of the query.
   */
  get(): Promise<QuerySnapshot<T>>;

  /**
   * Receive snapshots of the query when updated.
   * @param onNext
   * @returns Function to unsubscribe.
   */
  onSnapshot(
    onNext: (snapshot: QuerySnapshot<T>) => void,
  ): Promise<Unsubscribe>;
}
