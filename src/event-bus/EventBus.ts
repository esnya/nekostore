export default interface EventBus {
  on<T>(event: string, listener: (...args: T[]) => void): () => void;
  once<T>(event: string, listener: (...args: T[]) => void): () => void;
  emit<T>(event: string, ...args: T[]): void;
}
