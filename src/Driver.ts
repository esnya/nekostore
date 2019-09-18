import CollectionReference from './CollectionReference';

export default interface Driver {
  collection<T>(id: string): CollectionReference<T>;
}
