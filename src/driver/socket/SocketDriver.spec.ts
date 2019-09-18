import testDriver from '../Driver.spec';
import SocketDriver from './SocketDriver';
import { EventEmitter } from 'events';
import SocketDriverServer from './SocketDriverServer';
import BasicDriver from '../basic';

class FakeSocket extends EventEmitter {
  pair?: FakeSocket;

  emit<T>(event: string, ...args: T[]): boolean {
    if (!this.pair) return false;
    this.pair.emitSelf(event, ...args);
    return true;
  }

  private emitSelf<T>(event: string, ...args: T[]): boolean {
    return super.emit(event, ...args);
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

  testDriver(async () => new SocketDriver({ socket: up }));
});
