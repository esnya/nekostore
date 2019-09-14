import DocumentReference from './DocumentReference';
import Timestamp from './Timestamp';

export interface ExistingDocumentSnapshot<T> extends DocumentSnapshot<T> {
  readonly data: T;
  readonly createTime: Timestamp;
  readonly updateTime: Timestamp;
}

export default interface DocumentSnapshot<T> {
  readonly ref: DocumentReference<T>;
  readonly data?: T;
  readonly createTime?: Timestamp;
  readonly updateTime?: Timestamp;
  exisits(): this is ExistingDocumentSnapshot<T>;
}
