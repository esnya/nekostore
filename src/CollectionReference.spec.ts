import { expect } from 'chai';
import { fake } from 'sinon';
import Nekostore from './Nekostore';
import CollectionReference from './CollectionReference';
import fakeDriver from './fakeDriver.spec';

interface Data1 {
  foo: string;
}

describe('CollectionReference', () => {
  const driver = fakeDriver();
  const nekostore = new Nekostore(driver);

  let collection: CollectionReference<Data1>;
  it('is CollectionReference', () => {
    collection = nekostore.collection<Data1>('c01');
    expect(collection.id).to.equal('c01');
    expect(collection.path).to.equal('c01');
    expect(collection).to.equal(driver.fakeCollection);
  });

  it('returns DocumentReference', () => {
    const doc = collection.doc('d01');
    expect(collection.doc).to.be.calledOnceWith('d01');
    expect(doc.id).to.equal('d01');
    expect(doc.path).to.equal('c01/d01');
    expect(doc).to.equal(driver.fakeDocument);
  });

  it('gets', async () => {
    const snapshot = await collection.get();
    expect(snapshot).to.equal(driver.fakeQuerySnapshot);
  });

  it('adds', async () => {
    const doc = await collection.add({ foo: 'a' });
    expect(doc).to.equal(driver.fakeDocument);
  });

  it('subscribes', async () => {
    const onNext = fake();
    const unsubscribe = await collection.onSnapshot(onNext);
    expect(driver.fakeCollection.onSnapshot).calledOnceWith(onNext);
    expect(typeof unsubscribe).to.equal('function');
  });
});
