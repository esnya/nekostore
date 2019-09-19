import DocumentReference from './DocumentReference';
import Query from './Query';

/**
 * Reference for the collection.
 */
export default interface CollectionReference<T> extends Query<T> {
  /**
   * ID of the collection.
   */
  readonly id: string;

  /**
   * Path from the route separated by "/"
   */
  readonly path: string;

  /**
   * Get a reference for the document.
   */
  doc(id: string): DocumentReference<T>;

  /**
   * Add a new document.
   * @param data Data of new document.
   * @returns Reference for the added document.
   */
  add(data: T): Promise<DocumentReference<T>>;
}
