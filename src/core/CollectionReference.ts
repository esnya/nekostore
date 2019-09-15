import DocumentReference from './DocumentReference';
import QuerySnapshot from './QuerySnapshot';
import Unsubscribe from './Unsubscribe';

export default interface CollectionReference<T> {
  readonly id: string;
  readonly path: string;

  doc(id: string): DocumentReference<T>;
  get(): Promise<QuerySnapshot<T>>;
  add(data: T): Promise<DocumentReference<T>>;

  onSnapshot(onNext: (snapshot: QuerySnapshot<T>) => void): Unsubscribe;
}
