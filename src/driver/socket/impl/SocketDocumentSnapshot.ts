import DocumentSnapshot from '../../../DocumentSnapshot';
import DocumentReference from '../../../DocumentReference';

export default class SocketDocumentSnapshot<T> implements DocumentSnapshot<T> {
  constructor(ref: DocumentReference<T>, data?: T) {
    this.ref = ref;

    this.data = data;
  }

  readonly ref: DocumentReference<T>;
  readonly data?: T;

  exists(): boolean {
    return this.data !== undefined;
  }
}
