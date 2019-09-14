import DocumentReference from './DocumentReference';
import QuerySnapshot from './QuerySnapshot';

export default interface CollectionReference<T> {
  readonly id: string;
  readonly path: string;

  doc(id: string): DocumentReference<T>;
  get(): Promise<QuerySnapshot<T>>;
  add(data: T): Promise<DocumentReference<T>>;
}
