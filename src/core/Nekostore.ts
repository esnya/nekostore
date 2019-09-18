import Driver from './Driver';
import CollectionReference from './CollectionReference';

export default class Nekostore {
  readonly driver: Driver;

  constructor(driver: Driver) {
    this.driver = driver;
  }

  collection<T>(id: string): CollectionReference<T> {
    return this.driver.collection<T>(id);
  }
}
