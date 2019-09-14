import DocumentChange from './DocumentChange';
import CollectionReference from './CollectionReference';

export default interface QuerySnapshot<T> {
  readonly ref: CollectionReference<T>;
  readonly docs: DocumentChange<T>[];
}
