import DocumentChange from './DocumentChange';
import Query from './Query';

export default interface QuerySnapshot<T> {
  readonly ref: Query<T>;
  readonly docs: DocumentChange<T>[];
}
