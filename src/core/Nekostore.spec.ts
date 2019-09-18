import { expect } from 'chai';
import Nekostore from './Nekostore';
import fakeDriver from '../../tests/fakeDriver';

interface C01 {
  foo: string;
}

describe('Nekostore', () => {
  const driver = fakeDriver();

  let nekostore: Nekostore;
  it('sould be alble to initialize', () => {
    nekostore = new Nekostore(driver);
    expect(nekostore).instanceof(Nekostore);
  });

  it('exposes accessor for driver', () => {
    expect(nekostore.driver).to.equal(driver);
  });

  describe('collection', () => {
    it('calls driver factory', () => {
      const collection = nekostore.collection<C01>('c01');
      expect(driver.collection).to.be.calledOnceWith('c01');
      expect(collection).to.equal(driver.fakeCollection);
    });
  });
});
