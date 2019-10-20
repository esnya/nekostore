import DocumentSnapshot from '../../../DocumentSnapshot';
import DocumentReference from '../../../DocumentReference';
import BasicDocumentReference from './BasicDocumentReference';
import { Data } from '../../../store/Store';

export default class BasicDocumentSnapshot<T extends {}>
  implements DocumentSnapshot<T> {
  constructor(ref: BasicDocumentReference<T>, data?: Data) {
    this.ref = ref;

    this.data = data as T | undefined;
  }

  readonly ref: DocumentReference<T>;
  readonly data?: T;

  exists(): boolean {
    return this.data !== undefined;
  }
}
