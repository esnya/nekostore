import Nekostore from 'nekostore';
import BasicDriver from 'nekostore/lib/driver/basic';
import { logger, catchError } from './utilities';

interface Data {
  foo: string;
  bar?: number;
}

export default catchError(
  async (): Promise<void> => {
    logger.example('Watching snapshots');
    const driver = new BasicDriver();
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
  },
);
