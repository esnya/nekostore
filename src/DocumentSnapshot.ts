import DocumentReference from './DocumentReference';
import Timestamp, { Timestamps } from './Timestamp';

/**
 * Snapshot of existing document.
 */
export interface ExistingDocumentSnapshot<T>
  extends DocumentSnapshot<T>,
    Timestamps {
  readonly data: T;
  readonly createTime: Timestamp;
  readonly updateTime: Timestamp;
}

/**
 * Data at the time of the document.
 */
export default interface DocumentSnapshot<T> extends Partial<Timestamps> {
  /**
   * Reference for the document.
   */
  readonly ref: DocumentReference<T>;

  /**
   * Data of the document.
   */
  readonly data?: T;

  /**
   * Timestamp when the document was updated.
   */
  readonly createTime?: Timestamp;

  /**
   * Timestamp when the document was updated.
   */
  readonly updateTime?: Timestamp;

  /**
   * @returns `true` if the document is existing.
   */
  exists(): this is ExistingDocumentSnapshot<T>;
}
