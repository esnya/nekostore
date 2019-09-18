import Driver from '../../core/Driver';
import CollectionReference from '../../core/CollectionReference';
import BasicCollectionReference from './BasicCollectionReference';
import MemoryStore from '../../store/MemoryStore';
import Store from '../../store/Store';
import EventEmitter from './EventEmitter';
import * as events from 'events';

export interface Options {
  store?: Store;
  eventEmitter?: EventEmitter;
}

export default class BasicDriver implements Driver {
  constructor(options: Options = {}) {
    this.store = options.store || new MemoryStore();
    this.eventEmitter = options.eventEmitter || new events.EventEmitter();
  }

  readonly store: Store;
  readonly eventEmitter: EventEmitter;

  collection<T>(id: string): CollectionReference<T> {
    return new BasicCollectionReference<T>(this, id);
  }
}
