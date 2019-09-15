import DocumentReference from '../../core/DocumentReference';
import CollectionReference from '../../core/CollectionReference';
import BasicCollectionReference from './BasicCollectionReference';
import DocumentSnapshot from '../../core/DocumentSnapshot';
import Unsubscribe from '../../core/Unsubscribe';

export default class BasicDocumentReference<T> implements DocumentReference<T> {
  constructor(parent: CollectionReference<T>, id: string) {
    this.parent = parent;
    this.id = id;
  }

  readonly parent: CollectionReference<T>;
  readonly id: string;

  get path(): string {
    throw new Error('ToDo');
  }

  collection<U>(id: string): CollectionReference<U> {
    return new BasicCollectionReference(id, this);
  }

  get(): Promise<DocumentSnapshot<T>> {
    throw new Error('ToDo');
  }

  set(data: T): Promise<void> {
    console.log(data);
    throw new Error('ToDo');
  }

  update(data: Partial<T>): Promise<void> {
    console.log(data);
    throw new Error('ToDo');
  }

  delete(): Promise<void> {
    throw new Error('ToDo');
  }

  onSnapshot(): Unsubscribe {
    throw new Error('ToDo');
  }
}
