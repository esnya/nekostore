import Unsubscribe from '../core/Unsubscribe';

export default interface EventBus {
  on<T>(event: string, listener: (data: T) => void): Unsubscribe;
  emit<T>(event: string, data: T): void;
}
