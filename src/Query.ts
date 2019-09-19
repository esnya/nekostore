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
   *
   * @example
   * ```ts
   * const snapshot = await colRef.orderBy('foo.bar', 'desc').get();
   * ```
   */
  orderBy(field: string, direction?: OrderDirection): Query<T>;

  /**
   * Specify end poisiton by field value. Use after orderBy.
   * @param value Value of field specified wity orderBy.
   *
   * @example
   * ```ts
   * const snapshot = await colRef.orderBy('foo.bar', 'desc').endAt('c').get();
   * ```
   */
  endAt<U>(value: U): Query<T>;

  /**
   * Specify end poisiton by field value. Use after orderBy.
   * @param value Value of field specified wity orderBy.
   *
   * @example
   * ```ts
   * const snapshot = await colRef.orderBy('foo.bar', 'desc').endBefore('c').get();
   * ```
   */
  endBefore<U>(value: U): Query<T>;

  /**
   * Specify start poisiton by field value. Use after orderBy.
   * @param value Value of field specified wity orderBy.
   *
   * @example
   * ```ts
   * const snapshot = await colRef.orderBy('foo.bar', 'desc').startAfter('c').get();
   * ```
   */
  startAfter<U>(value: U): Query<T>;

  /**
   * Specify start poisiton by field value. Use after orderBy.
   * @param value Value of field specified wity orderBy.
   *
   * @example
   * ```ts
   * const snapshot = await colRef.orderBy('foo.bar', 'desc').startAt('c').get();
   * ```
   */
  startAt<U>(value: U): Query<T>;

  /**
   * Limit number of documents.
   *
   * @example
   * ```ts
   * const snapshot = await colRef.limit(2).get();
   * assert(snapshot.docs.length <= 2);
   * ```
   */
  limit(limit: number): Query<T>;

  /**
   * Filter documents by specified operator.
   * @param field Path for the field separated by '.'.
   * @param operator Operator for compararison e.g. '==', '<', '<=', '>', '>='
   * @param value Rvalue for comparison.
   *
   * @example
   * ```ts
   * const snapshot = await colRef.where('foo.bar', '>=', 2).get();
   * ```
   */
  where<U>(field: string, operator: WhereOperator, value: U): Query<T>;

  /**
   * Get a snapshot of the query.
   *
   * @example
   * ```ts
   * const snapshot = await query.get();
   * console.log(snapshot.docs.map(doc: DocumentChange<T> => doc.data));
   * ```
   */
  get(): Promise<QuerySnapshot<T>>;

  /**
   * Receive snapshots of the query when updated.
   * @param onNext
   * @returns Function to unsubscribe.
   *
   * @example
   * ```ts
   * let unsubscribe: Unsubscribe;
   *
   * async function onInit(): Promise<void> {
   *   unsubscribe = await query.onSnapshot(snapshot => {
   *     updateView(snapshot.docs);
   *   });
   * }
   *
   * async function onDestroy(): Promise<void> {
   *   await unsubscribe();
   * }
   * ```
   */
  onSnapshot(
    onNext: (snapshot: QuerySnapshot<T>) => void,
  ): Promise<Unsubscribe>;
}
