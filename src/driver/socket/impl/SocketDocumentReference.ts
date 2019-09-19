import DocumentReference from '../../../DocumentReference';
import SocketCollectionReference from './SocketCollectionReference';
import SocketDriverSocket from '../SocketDriver';
import Unsubscribe from '../../../Unsubscribe';
import DocumentSnapshot from '../../../DocumentSnapshot';
import SocketDocumentSnapshot, {
  DocumentSnapshotData,
} from './SocketDocumentSnapshot';

export default class SocketDocumentReference<T>
  implements DocumentReference<T> {
  constructor(parent: SocketCollectionReference<T>, id: string) {
    this.parent = parent;
    this.id = id;
  }

  readonly parent: SocketCollectionReference<T>;
  readonly id: string;

  get path(): string {
    return `${this.parent.path}/${this.id}`;
  }

  get driver(): SocketDriverSocket {
    return this.parent.driver;
  }

  collection<U>(id: string): SocketCollectionReference<U> {
    return new SocketCollectionReference<U>(this.driver, id, this);
  }

  async get(): Promise<DocumentSnapshot<T>> {
    const { snapshot } = await this.driver.request('documentGet', this.path);

    return new SocketDocumentSnapshot<T>(this, snapshot as DocumentSnapshotData<
      T
    >);
  }

  async set(data: T): Promise<void> {
    await this.driver.request('documentSet', this.path, data);
  }

  async update(data: Partial<T>): Promise<void> {
    await this.driver.request('documentUpdate', this.path, data);
  }

  async delete(): Promise<void> {
    await this.driver.request('documentDelete', this.path);
  }

  async onSnapshot(
    onNext: (snapshot: DocumentSnapshot<T>) => void,
  ): Promise<Unsubscribe> {
    const { subscriberId } = await this.driver.request(
      'documentSubscribe',
      this.path,
    );
    const event = `snapshot:${subscriberId}`;
    const listener = (snapshot: DocumentSnapshotData<T>): void => {
      onNext(new SocketDocumentSnapshot<T>(this, snapshot));
    };
    this.driver.socket.on(event, listener);

    return async (): Promise<void> => {
      this.driver.socket.off(event, listener);
      this.driver.request('unsubscribe', subscriberId);
    };
  }
}
