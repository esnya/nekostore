import testDriver from '../Driver.spec';
import SocketDriver from './SocketDriver';
import { EventEmitter } from 'events';
import SocketDriverServer from './SocketDriverServer';
import BasicDriver from '../basic';
import SecurityRule from '../basic/SecurityRule';

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

const rule: SecurityRule = {
  rules: [
    {
      path: '/private/readonly',
      read: true,
    },
    {
      path: '/private/writeonly',
      write: true,
    },
    {
      path: '/private/:uid',
      read: {
        $expr: { $eq: ['$uid', '$request.auth.uid'] },
      },
      write: {
        $expr: { $eq: ['$uid', '$request.auth.uid'] },
      },
    },
    { path: '/private/(.*)', read: false, write: false },
    { path: '(.*)', read: true, write: true },
  ],
};

describe('SocketDriver', () => {
  const up = new FakeSocket();
  const down = new FakeSocket();
  up.connect(down);

  const serverDriver = new BasicDriver({ rule });
  serverDriver.user = { uid: 'alice' };
  const server = new SocketDriverServer(serverDriver, down);
  after(() => server.destroy());

  testDriver(async () => new SocketDriver({ socket: up }));
});
