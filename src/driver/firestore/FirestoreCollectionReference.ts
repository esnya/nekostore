import CollectionReference from '../../core/CollectionReference';
import DocumentReference from '../../core/DocumentReference';
import QuerySnapshot from '../../core/QuerySnapshot';
import FirestoreDocumentReference from './FirestoreDocumentReference';
import FirestoreDocumentChange from './FirestoreDocumedntChange';
import { withTimestamps } from './utilities';
import Unsubscribe from '../../core/Unsubscribe';

function encodeQuerySnapshot<T>(
  ref: CollectionReference<T>,
  snapshot: firebase.firestore.QuerySnapshot,
): QuerySnapshot<T> {
  const docs = snapshot
    .docChanges()
    .map(doc => new FirestoreDocumentChange<T>(doc));

  return {
    ref,
    docs,
  };
}

export default class FirestoreCollectionReference<T>
  implements CollectionReference<T> {
  constructor(ref: firebase.firestore.CollectionReference) {
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

  async get(): Promise<QuerySnapshot<T>> {
    return encodeQuerySnapshot<T>(this, await this.ref.get());
  }

  async add(data: T): Promise<DocumentReference<T>> {
    const ref = await this.ref.add(withTimestamps(data));
    return new FirestoreDocumentReference<T>(ref);
  }

  onSnapshot(onNext: (value: QuerySnapshot<T>) => void): Unsubscribe {
    return this.ref.onSnapshot(snapshot => {
      onNext(encodeQuerySnapshot<T>(this, snapshot));
    });
  }
}
