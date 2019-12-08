import Nekostore from './Nekosotre';
import { isDocumentPath } from './path';
import InvalidPathError from './InvalidPathError';

export default class DocumentSnapshot<T> {
  constructor(
    readonly nekostore: Nekostore,
    readonly path: string,
    readonly data: Partial<T>,
  ) {
    if (!isDocumentPath(path)) throw new InvalidPathError(path, 'Document');
  }
}
