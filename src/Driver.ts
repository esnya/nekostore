import CollectionReference from './CollectionReference';

/**
 * Interface for driver implementation.
 */
export default interface Driver {
  /**
   * Collection reference getter.
   * @param id
   */
  collection<T>(id: string): CollectionReference<T>;
}
