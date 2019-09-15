import DocumentReference from './DocumentReference';
import Query from './Query';

export default interface CollectionReference<T> extends Query<T> {
  readonly id: string;
  readonly path: string;

  doc(id: string): DocumentReference<T>;
  add(data: T): Promise<DocumentReference<T>>;
}
