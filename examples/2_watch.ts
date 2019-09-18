import Nekostore from '..'; // 'nekostore'
import BasicDriver from '../lib/driver/basic'; // 'nekostore/lib/driver/basic'

interface Data {
  foo: string;
  bar?: number;
}

async function main(): Promise<void> {
  const driver = new BasicDriver();
  const nekostore = new Nekostore(driver);

  console.log('Get collectiopn reference');
  const c1Ref = nekostore.collection<Data>('c1');

  console.log('Watch collection');
  const unsubscribe1 = await c1Ref.onSnapshot(snapshot => {
    console.log('Collection snapshot');
    snapshot.docs.forEach(doc => {
      console.log(doc.ref.id, doc.type, doc.data);
    });
  });

  console.log('Get document reference');
  const d1Ref = await c1Ref.doc('d1');

  console.log('Watch document');
  const unsubscribe2 = await d1Ref.onSnapshot(snapshot => {
    console.log('Document snapshot');
    console.log(snapshot.exists(), snapshot.data);
  });

  console.log('Set document');
  // Collection snapshot / [id] added { foo: 'a', bar: 0 }
  // Document snapshot / true { foo: 'a', bar: 0 }
  await d1Ref.set({ foo: 'a', bar: 0 });

  console.log('Update document');
  await d1Ref.update({ bar: 1 });
  // Collection snapshot / [id] modified { foo: 'a', bar: 1 }
  // Document snapshot / true { foo: 'a', bar: 1 }

  console.log('Delete documment');
  await d1Ref.delete();
  // Collection snapshot / removed undefined
  // Document snapshot / false undefined

  console.log('Add document');
  await c1Ref.add({ foo: 'b' });
  // Collection snapshot / [id] added { foo: 'a' }

  await unsubscribe1();
  await unsubscribe2();
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