import Query from './Query';
import Nekostore from './Nekosotre';
import DocumentReference from './DocumentReference';
import { getParentPath } from './path';

export default class CollectionReference<T, U = never> extends Query<T> {
  constructor(readonly nekostore: Nekostore, readonly path: string) {
    super(nekostore, path, []);
  }

  get parent(): DocumentReference<U> | undefined {
    const parentPath = getParentPath(this.path);

    return parentPath
      ? new DocumentReference<U>(this.nekostore, parentPath)
      : undefined;
  }

  doc(id?: string): DocumentReference<T> {
    return new DocumentReference(
      this.nekostore,
      `${this.path}/${id || this.nekostore.driver.generateId()}`,
    );
  }

  async add(data: T): Promise<DocumentReference<T>> {
    const ref = this.doc();
    await ref.set(data);
    return ref;
  }
}
