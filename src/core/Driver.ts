import CollectionReference from './CollectionReference';

export default interface Driver {
  getCollectionReference<T>(id: string): CollectionReference<T>;
}
