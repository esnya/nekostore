export default interface EventEmitter {
  on<T>(event: string, listener: (...args: T[]) => void): void;
  once<T>(event: string, listener: (...args: T[]) => void): void;
  off<T>(event: string, listener: (...args: T[]) => void): void;
  emit<T>(event: string, ...args: T[]): void;
}
