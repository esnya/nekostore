import { EventEmitter } from 'events';
import Unsubscribe from '../core/Unsubscribe';
import EventBus from './EventBus';

export default class LocalEventBus implements EventBus {
  readonly ee = new EventEmitter();

  on<T>(event: string, listener: (data: T) => void): Unsubscribe {
    this.ee.on(event, listener);
    return (): void => {
      this.ee.off(event, listener);
    };
  }

  emit<T>(event: string, data: T): void {
    this.ee.emit(event, data);
  }
}
