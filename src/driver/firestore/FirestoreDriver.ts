/* eslint @typescript-eslint/no-use-before-define: off */
import Driver from '../../core/Driver';
import CollectionReference from '../../core/CollectionReference';
import Firestore from './Firestore';
import FirestoreCollectionReference from './FirestoreCollectionReference';

export default class FirestoreDriver implements Driver {
  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  readonly firestore: Firestore;

  getCollectionReference<T>(id: string): CollectionReference<T> {
    return new FirestoreCollectionReference<T>(this.firestore.collection(id));
  }
}
