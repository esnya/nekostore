import DocumentSnapshot from '../../../DocumentSnapshot';
import DocumentReference from '../../../DocumentReference';
import Timestamp from '../../../Timestamp';
import BasicDocumentReference from './BasicDocumentReference';
import { Data } from '../../../store/Store';

export default class BasicDocumentSnapshot<T extends {}>
  implements DocumentSnapshot<T> {
  constructor(ref: BasicDocumentReference<T>, snapshot?: Data) {
    this.ref = ref;

    if (snapshot) {
      const { createTime, updateTime, ...data } = snapshot;
      this.data = data as T;
      this.createTime = ref.driver.store.toTimestamp(createTime);
      this.updateTime = ref.driver.store.toTimestamp(updateTime);
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
