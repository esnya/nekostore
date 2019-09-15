import firebase from 'firebase/app';
import CollectionReference from '../../core/CollectionReference';
import DocumentReference from '../../core/DocumentReference';
import FirestoreDocumentReference from './FirestoreDocumentReference';
import { withTimestamps } from './utilities';
import FirestoreQuery from './FirestoreQuery';

export default class FirestoreCollectionReference<T> extends FirestoreQuery<T>
  implements CollectionReference<T> {
  constructor(ref: firebase.firestore.CollectionReference) {
    super(ref);
    this.ref = ref;
  }

  readonly ref: firebase.firestore.CollectionReference;

  get id(): string {
    return this.ref.id;
  }

  get path(): string {
    return this.ref.path;
  }

  doc(id: string): DocumentReference<T> {
    return new FirestoreDocumentReference<T>(this.ref.doc(id));
  }

  async add(data: T): Promise<DocumentReference<T>> {
    const ref = await this.ref.add(withTimestamps(data));
    return new FirestoreDocumentReference<T>(ref);
  }
}
