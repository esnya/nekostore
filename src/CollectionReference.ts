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
   * Path from the route separated by "/".
   */
  readonly path: string;

  /**
   * Get a reference for the document.
   *
   * @example
   * ```ts
   * const docRef: DocumentReference<T> = colRef.doc('id');
   * ```
   */
  doc(id: string): DocumentReference<T>;

  /**
   * Add a new document.
   * @param data Data of new document.
   * @returns Reference for the added document.
   *
   * @example
   * ```ts
   * const data: T = { ...data };
   * const docRef: DocumentReference<T> = await collRef.add(data);
   * ```
   */
  add(data: T): Promise<DocumentReference<T>>;
}
