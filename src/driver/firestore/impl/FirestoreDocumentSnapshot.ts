import DocumentSnapshot from '../../../DocumentSnapshot';
import FirestoreDocumentReference from './FirestoreDocumentReference';
import DocumentReference from '../../../DocumentReference';

export default class FirestoreDocumentSnapshot<T>
  implements DocumentSnapshot<T> {
  constructor(snapshot: firebase.firestore.DocumentSnapshot) {
    this.ref = new FirestoreDocumentReference<T>(snapshot.ref);

    const data = snapshot.data() as T | undefined;
    this.data = data;
  }

  readonly ref: DocumentReference<T>;
  readonly data?: T;

  exists(): boolean {
    return this.data !== undefined;
  }
}
