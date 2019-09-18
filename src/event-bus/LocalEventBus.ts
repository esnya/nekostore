import { EventEmitter } from 'events';
import EventBus from './EventBus';

export default class LocalEventBus implements EventBus {
  readonly ee = new EventEmitter();

  on<T>(event: string, listener: (...args: T[]) => void): () => void {
    this.ee.on(event, listener);
    return (): void => {
      this.ee.off(event, listener);
    };
  }

  once<T>(event: string, listener: (...args: T[]) => void): () => void {
    this.ee.once(event, listener);
    return (): void => {
      this.ee.off(event, listener);
    };
  }

  emit<T>(event: string, ...args: T[]): void {
    this.ee.emit(event, ...args);
  }
}
