import DocumentReference from '../../../DocumentReference';
import DocumentChange, { ChangeType } from '../../../DocumentChange';
import SocketDocumentSnapshot from './SocketDocumentSnapshot';

export interface DocumentChangeData {
  type: ChangeType;
  newIndex: number;
  oldIndex: number;
}

export default class SocketDocumentChange<T> extends SocketDocumentSnapshot<T>
  implements DocumentChange<T> {
  constructor(ref: DocumentReference<T>, change: DocumentChangeData, data?: T) {
    super(ref, data);

    const { type, newIndex, oldIndex } = change;
    this.type = type;
    this.newIndex = newIndex;
    this.oldIndex = oldIndex;
  }

  readonly type: ChangeType;
  readonly newIndex: number;
  readonly oldIndex: number;
}
