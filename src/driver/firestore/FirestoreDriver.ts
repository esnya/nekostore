/* eslint @typescript-eslint/no-use-before-define: off */
import Driver from '../../Driver';
import CollectionReference from '../../CollectionReference';
import Firestore from './Firestore';
import FirestoreCollectionReference from './FirestoreCollectionReference';

/**
 * Driver implementation using Firebase Firestore. Recommended!!
 */
export default class FirestoreDriver implements Driver {
  /**
   *
   * @param firestore Instance of firestore. i.e. firebase.firestore()
   */
  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  readonly firestore: Firestore;

  collection<T>(id: string): CollectionReference<T> {
    return new FirestoreCollectionReference<T>(this.firestore.collection(id));
  }
}
