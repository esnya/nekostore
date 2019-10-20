import DocumentReference from './DocumentReference';

/**
 * Snapshot of existing document.
 */
export interface NonEmptyDocumentSnapshot<T> extends DocumentSnapshot<T> {
  readonly data: T;
}

/**
 * Data at the time of the document.
 */
export default interface DocumentSnapshot<T> {
  /**
   * Reference for the document.
   */
  readonly ref: DocumentReference<T>;

  /**
   * Data of the document.
   */
  readonly data?: T;

  /**
   * @returns `true` if the document is existing.
   */
  exists(): this is NonEmptyDocumentSnapshot<T>;
}
