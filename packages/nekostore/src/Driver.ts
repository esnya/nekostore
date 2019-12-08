import DocumentSnapshot from './DocumentSnapshot';
import QuerySnapshot from './QuerySnapshot';
import { QueryObject } from './Query';

export default interface Driver {
  generateId(): string;

  getDocument<T>(path: string): Promise<DocumentSnapshot<T>>;
  setDocument<T>(path: string, data: T): Promise<void>;
  updateDocument<T>(path: string, data: Partial<T>): Promise<void>;
  onDocumentSnapshot<T>(
    path: string,
    onNext: (snapshot: DocumentSnapshot<T>) => void,
  ): Promise<() => void>;

  getQuery<T>(path: string, query: QueryObject[]): Promise<QuerySnapshot<T>>;
  onQuerySnapshot<T>(
    path: string,
    query: QueryObject[],
    onNext: (snapshot: QuerySnapshot<T>) => void,
  ): Promise<() => void>;
}
