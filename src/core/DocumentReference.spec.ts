import { expect } from 'chai';
import { fake } from 'sinon';
import { Nekostore } from '../nekostore';
import fakeDriver from './fakeDriver.spec';
import DocumentReference from './DocumentReference';

interface Data1 {
  foo: string;
  bar?: string;
}

describe('DocumentReference', () => {
  const driver = fakeDriver();
  const nekostore = new Nekostore(driver);

  let doc: DocumentReference<Data1>;
  it('is DocumentReferene', () => {
    doc = nekostore.collection<Data1>('c01').doc('d01');
    expect(doc.id).to.equal('d01');
    expect(doc.path).to.equal('c01/d01');
    expect(doc).to.equal(driver.fakeDocument);
  });

  it('returns sub CollectionReference', () => {
    const collection = doc.collection('c02');
    expect(doc.collection).to.be.calledOnceWith('c02');
    expect(collection.id).to.equal('c02');
    expect(collection.path).to.equal('c01/d01/c02');
    expect(collection).to.equal(driver.fakeSubCollection);
  });

  it('gets snapshot', async () => {
    const snapshot = await doc.get();
    expect(snapshot).to.equal(driver.fakeDocumentSnapshot);
    expect(snapshot.ref).to.equal(doc);
  });

  it('sets', async () => {
    await doc.set({
      foo: 'a',
    });
  });

  it('updates', async () => {
    await doc.update({
      bar: 'a',
    });
  });

  it('deletes', async () => {
    await doc.delete();
  });

  it('subscribes', async () => {
    const onNext = fake();
    const unsubscribe = await doc.onSnapshot(onNext);
    expect(driver.fakeDocument.onSnapshot).calledOnceWith(onNext);
    expect(typeof unsubscribe).to.equal('function');
  });
});
