import CollectionReference from '../../../CollectionReference';
import BasicQuery from './BasicQuery';
import DocumentReference from '../../../DocumentReference';
import BasicDocumentReference from './BasicDocumentReference';
import BasicDriver from '..';
import QuerySnapshot from '../../../QuerySnapshot';
import BasicDocumentChange from './BasicDocumentChange';

export default class BasicCollectionReference<T> extends BasicQuery<T>
  implements CollectionReference<T> {
  constructor(
    driver: BasicDriver,
    id: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parent?: BasicDocumentReference<any>,
  ) {
    super(driver, id, parent);
    this.id = id;
  }

  readonly id: string;

  private async emitAdded(ref: BasicDocumentReference<T>): Promise<void> {
    const snapshot = await ref.get();

    this.driver.eventEmitter.emit<QuerySnapshot<T>>(this.path, {
      ref: this,
      docs: [
        new BasicDocumentChange<T>(
          ref,
          { type: 'added', newIndex: 0, oldIndex: -1 },
          snapshot.data,
        ),
      ],
    });
  }

  async add(data: T): Promise<DocumentReference<T>> {
    this.driver.authorize(this.doc('<ID>').path, 'write');
    const id = await this.driver.store.add(this.path, data);

    const ref = new BasicDocumentReference<T>(this, id);

    await this.emitAdded(ref);

    return ref;
  }
  doc(id: string): DocumentReference<T> {
    return new BasicDocumentReference<T>(this, id);
  }
}
