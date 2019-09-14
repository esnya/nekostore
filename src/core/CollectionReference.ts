import DocumentReference from './DocumentReference';

export default interface CollectionReference<T> {
  readonly id: string;
  readonly path: string;

  doc(id: string): DocumentReference<T>;
}
