import Nekostore from 'nekostore';
import BasicDriver from 'nekostore/lib/driver/basic';
import SocketDriver from 'nekostore/lib/driver/socket';
import SocketDriverServer from 'nekostore/lib/driver/socket/SocketDriverServer';
import IO from 'socket.io';
import * as Socket from 'socket.io-client';
import { Server } from 'http';
import { catchError, logger } from '../utilities';

const host = '127.0.0.1';
const port = 8080;

interface Data {
  foo: string;
  bar?: number;
}

async function server(): Promise<() => void> {
  logger.task('Run server');
  const server = new Server();

  // eslint-disable-next-line new-cap
  const io = IO(server);
  const driver = new BasicDriver();
  io.on('connection', socket => {
    logger.result('Connected', socket.id);
    new SocketDriverServer(driver, socket);
  });

  await new Promise((resolve): void => {
    server.listen({ host, port }, resolve);
  });
  logger.result('Listening', server.address());

  return (): void => {
    logger.task('Close server');
    server.close();
  };
}

async function client(): Promise<void> {
  logger.task('Connect socket');
  const socket = Socket.connect(`http://${host}:${port}`);
  socket.once('connected', () => {
    logger.result('Connected');
  });

  const driver = new SocketDriver({ socket });
  const nekostore = new Nekostore(driver);

  logger.task('Get collectiopn reference');
  const c1Ref = nekostore.collection<Data>('c1');

  logger.task('Watch collection');
  const unsubscribe1 = await c1Ref.onSnapshot(snapshot => {
    logger.result('CollectionSnapshot');
    snapshot.docs.forEach(doc => {
      logger.result(doc.ref.id, doc.type, doc.data);
    });
  });

  logger.task('Get document reference');
  const d1Ref = await c1Ref.doc('d1');

  logger.task('Watch document');
  const unsubscribe2 = await d1Ref.onSnapshot(snapshot => {
    logger.result('DocumentSnapshot', snapshot.exists(), snapshot.data);
  });

  logger.task('Set document');
  // ColllectionSnapshot [id] added { foo: 'a', bar: 0 }
  // DocumentSnapshot true { foo: 'a', bar: 0 }
  await d1Ref.set({ foo: 'a', bar: 0 });

  logger.task('Update document');
  await d1Ref.update({ bar: 1 });
  // ColllectionSnapshot [id] modified { foo: 'a', bar: 1 }
  // DocumentSnapshot true { foo: 'a', bar: 1 }

  logger.task('Delete documment');
  await d1Ref.delete();
  // ColllectionSnapshot removed undefined
  // DocumentSnapshot false undefined

  logger.task('Add document');
  await c1Ref.add({ foo: 'b' });
  // ColllectionSnapshot [id] added { foo: 'a' }

  await unsubscribe1();
  await unsubscribe2();
}

export default catchError(
  async (): Promise<void> => {
    logger.example('Socket');
    const close = await server();
    await client();
    close();
  },
);
