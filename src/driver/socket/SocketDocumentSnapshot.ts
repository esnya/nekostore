import DocumentSnapshot from '../../core/DocumentSnapshot';
import Timestamp from '../../core/Timestamp';
import DocumentReference from '../../core/DocumentReference';

export interface DocumentSnapshotData<T> {
  data: T;
  createTime: number;
  updateTime: number;
}

export default class SocketDocumentSnapshot<T> implements DocumentSnapshot<T> {
  constructor(ref: DocumentReference<T>, snapshot?: DocumentSnapshotData<T>) {
    this.ref = ref;

    if (snapshot) {
      const { data, createTime, updateTime } = snapshot;

      this.data = data;
      this.createTime = Timestamp.fromMillis(createTime);
      this.updateTime = Timestamp.fromMillis(updateTime);
    }
  }

  readonly ref: DocumentReference<T>;
  readonly data?: T;
  readonly createTime?: Timestamp;
  readonly updateTime?: Timestamp;

  exists(): boolean {
    return this.data !== undefined;
  }
}
