import Driver from '../../core/Driver';
import CollectionReference from '../../core/CollectionReference';
import BasicCollectionReference from './BasicCollectionReference';
import MemoryStore from '../../store/MemoryStore';
import LocalEventBus from '../../event-bus/LocalEventBus';
import Store from '../../store/Store';
import EventBus from '../../event-bus/EventBus';

export default class BasicDriver implements Driver {
  constructor(options: { store?: Store; eventBus?: EventBus } = {}) {
    this.store = options.store || new MemoryStore();
    this.eventBus = options.eventBus || new LocalEventBus();
  }

  readonly store: Store;
  readonly eventBus: EventBus;

  collection<T>(id: string): CollectionReference<T> {
    return new BasicCollectionReference<T>(this, id);
  }
}
