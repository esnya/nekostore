import DocumentChange from './DocumentChange';
import Query from './Query';

/**
 * Data at the time of the query.
 */
export default interface QuerySnapshot<T> {
  /**
   * Reference for the query.
   */
  readonly ref: Query<T>;

  /**
   * Snapshot of documents.
   */
  readonly docs: DocumentChange<T>[];
}
