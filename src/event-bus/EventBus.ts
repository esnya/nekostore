export default interface EventBus {
  on<T>(event: string, listener: (...args: T[]) => void): () => void;
  once<T>(event: string, listener: (...args: T[]) => void): () => void;
  emit<T>(event: string, ...args: T[]): void;
}

interface EventEmitter {
  on<T>(event: string, listener: (...args: T[]) => void): EventEmitter;
  once<T>(event: string, listener: (...args: T[]) => void): EventEmitter;
  off<T>(event: string, listener: (...args: T[]) => void): EventEmitter;
  emit<T>(event: string, ...args: T[]): any;
}

export class EventBusWrapper<T extends EventEmitter> {
  constructor(ee: T) {
    this.ee = ee;
  }

  private readonly ee: T;

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
