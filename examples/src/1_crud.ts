import Nekostore from 'nekostore';
import BasicDriver from 'nekostore/lib/driver/basic';
import { catchError, logger } from '../utilities';

interface Data {
  foo: string;
  bar?: number;
}

export default catchError(
  async (): Promise<void> => {
    logger.example('CRUD');

    const driver = new BasicDriver();
    const nekostore = new Nekostore(driver);

    logger.task('Get collectiopn reference');
    const c1Ref = nekostore.collection<Data>('c1');
    logger.result(c1Ref.path);

    logger.task('Get document reference');
    const d1Ref = await c1Ref.doc('d1');
    logger.result(d1Ref.path);

    logger.task('Set document');
    await d1Ref.set({ foo: 'a', bar: 0 });

    logger.task('Get document snapshot');
    const snapshot1 = await d1Ref.get();
    logger.result(snapshot1.data); // { foo: 'a', bar: 0 }

    logger.task('Update document');
    await d1Ref.update({ bar: 1 });
    logger.result((await d1Ref.get()).data); // { foo: 'a', bar: 1 }

    logger.task('Delete documment');
    await d1Ref.delete();
    logger.result((await d1Ref.get()).exists()); // false

    logger.task('Add document');
    const d2Ref = await c1Ref.add({ foo: 'b' });
    logger.result((await d2Ref.get()).data); // { foo: 'b' }

    await c1Ref.add({ foo: 'c' });
    await c1Ref.add({ foo: 'd', bar: 1 });
    await c1Ref.add({ foo: 'e' });

    logger.task('Get collection snapshot');
    const snapshot2 = await c1Ref.get();
    snapshot2.docs.forEach(doc => {
      logger.result(doc.type); // 'added';
      logger.result(doc.data);
    });
  },
);
