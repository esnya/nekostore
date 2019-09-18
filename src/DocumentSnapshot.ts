import DocumentReference from './DocumentReference';
import Timestamp, { Timestamps } from './Timestamp';

export interface ExistingDocumentSnapshot<T>
  extends DocumentSnapshot<T>,
    Timestamps {
  readonly data: T;
  readonly createTime: Timestamp;
  readonly updateTime: Timestamp;
}

export default interface DocumentSnapshot<T> extends Partial<Timestamps> {
  readonly ref: DocumentReference<T>;
  readonly data?: T;
  exists(): this is ExistingDocumentSnapshot<T>;
}
