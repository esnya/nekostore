import DocumentReference from '../../core/DocumentReference';
import CollectionReference from '../../core/CollectionReference';
import FirestoreCollectionReference from './FirestoreCollectionReference';
import DocumentSnapshot from '../../core/DocumentSnapshot';
import FirestoreDocumentSnapsnot from './FirestoreDocumentSnapshot';
import NotFoundError from '../../core/NotFoundError';
import { withTimestamps, withUpdateTime } from './utilities';

export default class FirestoreDocumentReference<T>
  implements DocumentReference<T> {
  constructor(ref: firebase.firestore.DocumentReference) {
    this.ref = ref;
  }

  readonly ref: firebase.firestore.DocumentReference;

  get id(): string {
    return this.ref.id;
  }

  get path(): string {
    return this.ref.path;
  }

  get parent(): CollectionReference<T> {
    return new FirestoreCollectionReference(this.ref.parent);
  }

  collection<U>(id: string): CollectionReference<U> {
    return new FirestoreCollectionReference<U>(this.ref.collection(id));
  }

  async get(): Promise<DocumentSnapshot<T>> {
    const snapshot = await this.ref.get();
    return new FirestoreDocumentSnapsnot<T>(snapshot);
  }

  async set(data: T): Promise<void> {
    await this.ref.set(withTimestamps(data));
  }

  async update(data: Partial<T>): Promise<void> {
    try {
      await this.ref.update(withUpdateTime(data));
    } catch (error) {
      if (error.code === 'not-found') {
        throw new NotFoundError(`No document to update: ${this.path}`, error);
      }
      throw error;
    }
  }

  async delete(): Promise<void> {
    await this.ref.delete();
  }
}