import Nekostore from 'nekostore';
import BasicDriver from 'nekostore/lib/driver/basic';
import { catchError, logger } from './utilities';

interface Data {
  foo: string;
  bar?: number;
}

export default catchError(
  async (): Promise<void> => {
    logger.example('Query');
    const driver = new BasicDriver();
    const nekostore = new Nekostore(driver);

    logger.task('Get collectiopn reference');
    const c1Ref = nekostore.collection<Data>('c1');

    [{ foo: 'a' }, { foo: 'b' }, { foo: 'c' }].map(async item => {
      await c1Ref.add(item);
    });

    logger.task('limit');
    const s1 = await c1Ref.limit(2).get();
    logger.result(s1.docs.length); // 2

    logger.task('orderBy');
    const s2 = await c1Ref.orderBy('foo').get();
    logger.result(s2.docs.map(doc => doc.data)); // [ { foo: 'a' }, { foo: 'b' }, { foo: 'c' } ]
    const s3 = await c1Ref.orderBy('foo', 'desc').get();
    logger.result(s3.docs.map(doc => doc.data)); // [ { foo: 'c' }, { foo: 'b' }, { foo: 'a' } ]

    logger.task('where');
    const s4 = await c1Ref.where('foo', '>=', 'b').get();
    logger.result(s4.docs.map(doc => doc.data)); // [ { foo: 'b' }, { foo: 'c' } ]

    logger.task('endAt');
    const s5 = await c1Ref
      .orderBy('foo')
      .endAt('b')
      .get();
    logger.result(s5.docs.map(doc => doc.data)); // [ { foo: 'a' }, { foo: 'b' } ]

    logger.task('endBefore');
    const s6 = await c1Ref
      .orderBy('foo')
      .endBefore('b')
      .get();
    logger.result(s6.docs.map(doc => doc.data)); // [ { foo: 'a' } ]

    logger.task('startAfter');
    const s7 = await c1Ref
      .orderBy('foo')
      .startAfter('b')
      .get();
    logger.result(s7.docs.map(doc => doc.data)); // [ { foo: 'c' } ]

    logger.task('startAt');
    const s8 = await c1Ref
      .orderBy('foo')
      .startAt('b')
      .get();
    logger.result(s8.docs.map(doc => doc.data)); // [ { foo: 'b' }, { foo: 'c' } ]
  },
);
