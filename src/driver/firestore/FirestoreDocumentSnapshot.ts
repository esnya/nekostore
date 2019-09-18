import DocumentSnapshot from '../../DocumentSnapshot';
import FirestoreDocumentReference from './FirestoreDocumentReference';
import Timestamp, { Timestamps } from '../../Timestamp';
import DocumentReference from '../../DocumentReference';

export default class FirestoreDocumentSnapsnot<T>
  implements DocumentSnapshot<T> {
  constructor(snapshot: firebase.firestore.DocumentSnapshot) {
    this.ref = new FirestoreDocumentReference<T>(snapshot.ref);

    const rawData = snapshot.data() as (T & Timestamps | undefined);
    if (!rawData) return;
    const { createTime, updateTime, ...data } = rawData;

    this.data = (data || {}) as T;
    this.createTime = createTime;
    this.updateTime = updateTime;
  }

  readonly ref: DocumentReference<T>;
  readonly data?: T;
  readonly createTime?: Timestamp;
  readonly updateTime?: Timestamp;

  exists(): boolean {
    return this.data !== undefined;
  }
}
