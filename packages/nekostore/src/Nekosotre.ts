import Driver from './Driver';
import CollectionReference from './CollectionReference';
import DocumentReference from './DocumentReference';

export default class Nekostore {
  constructor(readonly driver: Driver) {}

  collection<T>(path: string): CollectionReference<T> {
    return new CollectionReference<T>(this, path);
  }

  doc<T>(path: string): DocumentReference<T> {
    return new DocumentReference<T>(this, path);
  }
}
