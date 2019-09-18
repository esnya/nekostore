import DocumentReference from '../../core/DocumentReference';
import SocketCollectionReference from './SocketCollectionReference';
import SocketDriverSocket from './SocketDriver';
import Unsubscribe from '../../core/Unsubscribe';
import DocumentSnapshot from '../../core/DocumentSnapshot';
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
    const unsubscribe = this.driver.socket.on(
      `snapshot:${subscriberId}`,
      (snapshot: DocumentSnapshotData<T>) => {
        onNext(new SocketDocumentSnapshot<T>(this, snapshot));
      },
    );

    return async (): Promise<void> => {
      await unsubscribe();
      this.driver.request('unsubscribe', subscriberId);
    };
  }
}
