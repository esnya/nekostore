import DocumentChange, { ChangeType } from '../../DocumentChange';
import FirestoreDocumentSnapsnot from './FirestoreDocumentSnapshot';

export default class FirestoreDocumentChange<T>
  extends FirestoreDocumentSnapsnot<T>
  implements DocumentChange<T> {
  constructor(change: firebase.firestore.DocumentChange) {
    super(change.doc);

    this.type = change.type;
    this.newIndex = change.newIndex;
    this.oldIndex = change.oldIndex;
  }

  readonly type: ChangeType;
  readonly newIndex: number;
  readonly oldIndex: number;
}
