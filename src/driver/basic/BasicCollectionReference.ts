import CollectionReference from '../../core/CollectionReference';
import BasicQuery from './BasicQuery';
import DocumentReference from '../../core/DocumentReference';
import BasicDocumentReference from './BasicDocumentReference';

export default class BasicCollectionReference<T> extends BasicQuery<T>
  implements CollectionReference<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(id: string, parent?: DocumentReference<any>) {
    super(id);
    this.id = id;
    this.parent = parent;
  }

  readonly id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly parent?: DocumentReference<any>;

  get path(): string {
    throw new Error('ToDo');
  }

  add(data: T): Promise<DocumentReference<T>> {
    throw new Error('ToDo' + JSON.stringify(data));
  }
  doc(id: string): DocumentReference<T> {
    return new BasicDocumentReference<T>(this, id);
  }
}
