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

  console.log('Get document reference');
  const d1Ref = await c1Ref.doc('d1');

  console.log('Set document');
  await d1Ref.set({ foo: 'a', bar: 0 });

  console.log('Get document snapshot');
  const snapshot1 = await d1Ref.get();
  console.log(snapshot1.data); // { foo: 'a', bar: 0 }

  console.log('Update document');
  await d1Ref.update({ bar: 1 });
  console.log((await d1Ref.get()).data); // { foo: 'a', bar: 1 }

  console.log('Delete documment');
  await d1Ref.delete();
  console.log((await d1Ref.get()).exists()); // false

  console.log('Add document');
  const d2Ref = await c1Ref.add({ foo: 'b' });
  console.log((await d2Ref.get()).data); // { foo: 'b' }

  await c1Ref.add({ foo: 'c' });
  await c1Ref.add({ foo: 'd', bar: 1 });
  await c1Ref.add({ foo: 'e' });

  console.log('Get collection snapshot');
  const snapshot2 = await c1Ref.get();
  snapshot2.docs.forEach(doc => {
    console.log(doc.type); // 'added';
    console.log(doc.data);
  });
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
