import DocumentReference from '../../DocumentReference';
import CollectionReference from '../../CollectionReference';
import BasicCollectionReference from './BasicCollectionReference';
import DocumentSnapshot from '../../DocumentSnapshot';
import Unsubscribe from '../../Unsubscribe';
import BasicDocumentSnapshot from './BasicDocumentSnapshot';
import BasicDriver from '.';
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
    const rawData = await this.parent.driver.store.get(
      this.parent.path,
      this.id,
    );

    return new BasicDocumentSnapshot(this, rawData);
  }

  async set(data: T): Promise<void> {
    const rawData = {
      ...data,
      ...this.driver.store.serverTimestamps('createTime', 'updateTime'),
    };
    await this.driver.store.set(this.parent.path, this.id, rawData);

    const snapshot = new BasicDocumentSnapshot(this, rawData);
    this.driver.eventEmitter.emit(this.path, snapshot);
  }

  async update(data: Partial<T>): Promise<void> {
    await this.driver.store.update(this.parent.path, this.id, {
      ...data,
      ...this.driver.store.serverTimestamps('updateTime'),
    });

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
          snapshot.exists()
            ? {
                ...snapshot.data,
                createTime: snapshot.createTime,
                updateTime: snapshot.updateTime,
              }
            : undefined,
        ),
      ],
    });
  }

  async delete(): Promise<void> {
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
    this.driver.eventEmitter.on(this.path, onNext);

    return async (): Promise<void> => {
      this.driver.eventEmitter.off(this.path, onNext);
    };
  }
}
