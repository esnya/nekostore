import CollectionReference from './CollectionReference';
import DocumentSnapshot from './DocumentSnapshot';
import Unsubscribe from './Unsubscribe';

/**
 * Reference for the document.
 */
export default interface DocumentReference<T> {
  /**
   * ID of the document.
   */
  readonly id: string;

  /**
   * Path from the route separated by "/"
   */
  readonly path: string;

  /**
   * Reference of the parent collection.
   */
  readonly parent: CollectionReference<T>;

  /**
   * Get reference for the child collection
   * @param id
   * @returns Reference for the child collection.
   */
  collection<U>(id: string): CollectionReference<U>;

  /**
   * Get a snapshot of document.
   */
  get(): Promise<DocumentSnapshot<T>>;

  /**
   * Set document data.
   * @param data
   */
  set(data: T): Promise<void>;

  /**
   * Update document data. Data will merged deeply. For existing documents only.
   * @param data
   */
  update(data: Partial<T>): Promise<void>;

  /**
   * Delete document.
   */
  delete(): Promise<void>;

  /**
   * Receive snapshots of the document when updated.
   * @param onNext
   * @returns Function to unsubscribe.
   */
  onSnapshot(
    onNext: (snapshot: DocumentSnapshot<T>) => void,
  ): Promise<Unsubscribe>;
}
