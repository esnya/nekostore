import Driver from './Driver';
import CollectionReference from './CollectionReference';

/**
 * Root API interface.
 *
 * @example
 * ```ts
 * import Nekostore from 'nekostore';
 * import BasicDriver from 'nekostore/lib/driver/basic';
 *
 * const driver = new BasicDriver();
 * const nekostore = new Nekostore(driver);
 *
 * const colRef = nekostore.collection<{ foo: string }>('c1');
 * ```
 */
export default class Nekostore {
  readonly driver: Driver;

  /**
   * @param driver Driver instance you chosen.
   */
  constructor(driver: Driver) {
    this.driver = driver;
  }

  /**
   * Get a reference of the collection.
   */
  collection<T>(id: string): CollectionReference<T> {
    return this.driver.collection<T>(id);
  }
}
