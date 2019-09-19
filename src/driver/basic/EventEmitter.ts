/**
 * Interface for implementation of the EventEmitter that listens and emits events.
 */
export default interface EventEmitter {
  /**
   * Add an event listener.
   */
  on<T>(event: string, listener: (...args: T[]) => void): void;

  /**
   * Add a one-time event listener for once.
   */
  once<T>(event: string, listener: (...args: T[]) => void): void;

  /**
   * Remove an event listenr.
   */
  off<T>(event: string, listener: (...args: T[]) => void): void;

  /**
   * Emit event.
   */
  emit<T>(event: string, ...args: T[]): void;
}
