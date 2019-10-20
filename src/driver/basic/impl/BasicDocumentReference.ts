import DocumentReference from '../../../DocumentReference';
import CollectionReference from '../../../CollectionReference';
import BasicCollectionReference from './BasicCollectionReference';
import DocumentSnapshot from '../../../DocumentSnapshot';
import Unsubscribe from '../../../Unsubscribe';
import BasicDocumentSnapshot from './BasicDocumentSnapshot';
import BasicDriver from '..';
import BasicDocumentChange from './BasicDocumentChange';

export default class BasicDocumentReference<T extends {}>
  implements DocumentReference<T> {
  constructor(parent: BasicCollectionReference<T>, id: string) {
    this.parent = parent;
    this.id = id;
  }

  readonly parent: BasicCollectionReference<T>;
  readonly id: string;

  get path(): string {
    return `${this.parent.path}/${this.id}`;
  }

  get driver(): BasicDriver {
    return this.parent.driver;
  }

  collection<U>(id: string): CollectionReference<U> {
    return new BasicCollectionReference(this.parent.driver, id, this);
  }

  async get(): Promise<DocumentSnapshot<T>> {
    this.driver.authorize(this.path, 'read');

    const data = await this.parent.driver.store.get(this.parent.path, this.id);

    return new BasicDocumentSnapshot(this, data);
  }

  async set(data: T): Promise<void> {
    this.driver.authorize(this.path, 'write');
    await this.driver.store.set(this.parent.path, this.id, data);
    const snapshot = new BasicDocumentSnapshot(this, data);
    this.driver.eventEmitter.emit(this.path, snapshot);
  }

  async update(data: Partial<T>): Promise<void> {
    this.driver.authorize(this.path, 'write');
    await this.driver.store.update(this.parent.path, this.id, data);

    const snapshot = await this.get();
    this.driver.eventEmitter.emit(this.path, snapshot);
    this.driver.eventEmitter.emit(this.parent.path, {
      ref: this.parent,
      docs: [
        new BasicDocumentChange<T>(
          this,
          {
            type: 'modified',
            newIndex: -1,
            oldIndex: -1,
          },
          snapshot.data,
        ),
      ],
    });
  }

  async delete(): Promise<void> {
    this.driver.authorize(this.path, 'write');
    await this.driver.store.delete(this.parent.path, this.id);
    this.driver.eventEmitter.emit(this.path, new BasicDocumentSnapshot(this));
    this.driver.eventEmitter.emit(this.parent.path, {
      ref: this.parent,
      docs: [
        new BasicDocumentChange<T>(this, {
          type: 'removed',
          oldIndex: -1,
          newIndex: -1,
        }),
      ],
    });
  }

  async onSnapshot(
    onNext: (snapshot: DocumentSnapshot<T>) => void,
  ): Promise<Unsubscribe> {
    this.driver.authorize(this.path, 'read');
    this.driver.eventEmitter.on(this.path, onNext);

    return async (): Promise<void> => {
      this.driver.eventEmitter.off(this.path, onNext);
    };
  }
}
