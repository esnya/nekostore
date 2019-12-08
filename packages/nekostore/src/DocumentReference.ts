import Nekostore from './Nekosotre';
import { getId, isDocumentPath } from './path';
import InvalidPathError from './InvalidPathError';
import DocumentSnapshot from './DocumentSnapshot';

export default class DocumentReference<T> {
  constructor(readonly nekostore: Nekostore, readonly path: string) {
    if (!isDocumentPath(path)) {
      throw new InvalidPathError(path, 'Document');
    }

    const id = getId(this.path);
    if (!id) throw new InvalidPathError(this.path, 'Document');
    this.id = id;
  }

  readonly id: string;

  async set(data: T): Promise<void> {
    await this.nekostore.driver.setDocument<T>(this.path, data);
  }
  async update(data: Partial<T>): Promise<void> {
    await this.nekostore.driver.updateDocument<T>(this.path, data);
  }

  async get(): Promise<DocumentSnapshot<T>> {
    return await this.nekostore.driver.getDocument<T>(this.path);
  }
  async onSnapshot(
    onNext: (snapshot: DocumentSnapshot<T>) => void,
  ): Promise<() => void> {
    return await this.nekostore.driver.onDocumentSnapshot(this.path, onNext);
  }
}
