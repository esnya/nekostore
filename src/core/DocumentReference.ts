import CollectionReference from './CollectionReference';

export default interface DocumentReference<T> {
  readonly id: string;
  readonly path: string;
  readonly parent: CollectionReference<T>;

  collection<U>(id: string): CollectionReference<U>;
}
