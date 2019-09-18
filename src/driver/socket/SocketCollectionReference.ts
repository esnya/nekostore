import CollectionReference from '../../CollectionReference';
import SocketDriverSocket from './SocketDriver';
import SocketQuery from './SocketQuery';
import DocumentReference from '../../DocumentReference';
import SocketDocumentReference from './SocketDocumentReference';

export default class SocketCollectionReference<T> extends SocketQuery<T>
  implements CollectionReference<T> {
  constructor(
    driver: SocketDriverSocket,
    id: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parent?: DocumentReference<any>,
  ) {
    super(driver, id, parent);
  }

  doc(id: string): DocumentReference<T> {
    return new SocketDocumentReference<T>(this, id);
  }

  async add(data: T): Promise<DocumentReference<T>> {
    const { id } = await this.driver.request('collectionAdd', this.path, data);
    return new SocketDocumentReference<T>(this, id);
  }
}
