import testDriver from '../Driver.spec';
import SocketDriver from './SocketDriver';
import { EventEmitter } from 'events';
import Unsubscribe from '../../core/Unsubscribe';
import SocketDriverServer from './SocketDriverServer';
import BasicDriver from '../basic';

class FakeSocket {
  readonly ee = new EventEmitter();
  pair?: FakeSocket;

  on<T>(event: string, listener: (...args: T[]) => void): () => void {
    this.ee.on(event, listener);
    return (): void => {
      this.ee.off(event, listener);
    };
  }

  once<T>(event: string, listener: (...args: T[]) => void): () => void {
    // console.log('once', event);
    this.ee.once(event, listener);
    return (): void => {
      this.ee.off(event, listener);
    };
  }

  emit<T>(event: string, ...args: T[]): void {
    // console.log('emit', event, data);
    if (this.pair) this.pair.ee.emit(event, ...args);
  }

  connect(target: FakeSocket): void {
    target.pair = this;
    this.pair = target;
  }
}

describe('SocketDriver', () => {
  const up = new FakeSocket();
  const down = new FakeSocket();
  up.connect(down);

  const server = new SocketDriverServer(new BasicDriver(), down);
  after(() => server.destroy());

  testDriver(SocketDriver, async () => [
    {
      socket: up,
    },
  ]);
});
