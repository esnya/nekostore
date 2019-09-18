import BasicDriver from '../src/driver/basic'; // 'nekostore/lib/src/driver/basic'
import Nekostore from '../src/nekostore'; // 'nekostore'

interface Data {
  foo: string;
  bar?: number;
}

async function main(): Promise<void> {
  const driver = new BasicDriver();
  const nekostore = new Nekostore(driver);

  console.log('Get collectiopn reference');
  const c1Ref = nekostore.collection<Data>('c1');

  [{ foo: 'a' }, { foo: 'b' }, { foo: 'c' }].map(async item => {
    await c1Ref.add(item);
  });

  console.log('limit');
  const s1 = await c1Ref.limit(2).get();
  console.log(s1.docs.length); // 2

  console.log('orderBy');
  const s2 = await c1Ref.orderBy('foo').get();
  console.log(s2.docs.map(doc => doc.data)); // [ { foo: 'a' }, { foo: 'b' }, { foo: 'c' } ]
  const s3 = await c1Ref.orderBy('foo', 'desc').get();
  console.log(s3.docs.map(doc => doc.data)); // [ { foo: 'c' }, { foo: 'b' }, { foo: 'a' } ]

  console.group('where');
  const s4 = await c1Ref.where('foo', '>=', 'b').get();
  console.log(s4.docs.map(doc => doc.data)); // [ { foo: 'b' }, { foo: 'c' } ]

  console.log('endAt');
  const s5 = await c1Ref
    .orderBy('foo')
    .endAt('b')
    .get();
  console.log(s5.docs.map(doc => doc.data)); // [ { foo: 'a' }, { foo: 'b' } ]

  console.log('endBefore');
  const s6 = await c1Ref
    .orderBy('foo')
    .endBefore('b')
    .get();
  console.log(s6.docs.map(doc => doc.data)); // [ { foo: 'a' } ]

  console.log('startAfter');
  const s7 = await c1Ref
    .orderBy('foo')
    .startAfter('b')
    .get();
  console.log(s7.docs.map(doc => doc.data)); // [ { foo: 'c' } ]

  console.log('startAt');
  const s8 = await c1Ref
    .orderBy('foo')
    .startAt('b')
    .get();
  console.log(s8.docs.map(doc => doc.data)); // [ { foo: 'b' }, { foo: 'c' } ]
}
main().then(
  () => {
    process.exit(0);
  },
  error => {
    console.error(error);
    process.exit(1);
  },
);
