import Driver from '../../core/Driver';
import CollectionReference from '../../core/CollectionReference';
import BasicCollectionReference from './BasicCollectionReference';

export default class BasicDriver implements Driver {
  getCollectionReference<T>(id: string): CollectionReference<T> {
    return new BasicCollectionReference<T>(id);
  }
}
