import { expect } from 'chai';
import Store from './Store';
import NotFoundError from '../core/NotFoundError';
import Timestamp from '../core/Timestamp';

export default function testStore<T>(
  Ctor: { new (...args: T[]): Store },
  ...args: T[]
): void {
  const c1 = 'c0/d1/c1';

  let store: Store;
  it('can instantiate', () => {
    store = new Ctor(...args);
  });

  let d1: string;
  after(async () => {
    await store.delete(c1, d1);
  });

  it('adds', async () => {
    d1 = await store.add(c1, { foo: 'a', bar: 'b' });
    expect(d1).not.to.be.empty;
  });

  it('gets', async () => {
    const data = await store.get(c1, d1);
    expect(data).to.deep.equal({ foo: 'a', bar: 'b' });
  });

  it('updates', async () => {
    await store.update(c1, d1, { foo: 'c' });
    const data = await store.get(c1, d1);
    expect(data).to.deep.equal({ foo: 'c', bar: 'b' });
  });

  it('deletes', async () => {
    await store.delete(c1, d1);
  });

  it('gets unexists', async () => {
    const data = await store.get(c1, d1);
    expect(data).to.be.undefined;
  });

  it('throws NotFoundError', async () => {
    await expect(store.update(c1, d1, { bar: 'e' })).to.rejectedWith(
      NotFoundError,
    );
  });

  it('sets unexists', async () => {
    await store.set(c1, d1, { foo: 'f' });
    const data = await store.get(c1, d1);
    expect(data).to.deep.equal({ foo: 'f' });
  });

  it('has serverTimestamp', async () => {
    await store.update(c1, d1, {
      ...store.serverTimestamps('createTime', 'updateTime'),
    });
  });

  it('has toTimestamp', async () => {
    const data = await store.get(c1, d1);
    expect(data).has.keys('createTime', 'updateTime', 'foo');
    expect(data.foo).to.equal('f');

    const createTime = store.toTimestamp(data.createTime);
    expect(createTime).to.instanceOf(Timestamp);
    expect(createTime.toMillis()).lessThan(Date.now());
    const updateTime = store.toTimestamp(data.updateTime);
    expect(updateTime).to.instanceOf(Timestamp);
    expect(updateTime.toMillis()).lessThan(Date.now());
    expect(createTime).to.deep.equal(updateTime);
  });

  it('finds', async () => {
    await store.delete(c1, d1);

    await store.add(c1, { foo: 'a', bar: 3 });
    await store.add(c1, { foo: 'b', bar: 2 });
    const d3 = await store.add(c1, { foo: 'c', bar: 1 });
    const d4 = await store.add(c1, { foo: 'd', bar: 0 });

    const result = await store.find(c1, [
      {
        $match: {
          bar: {
            $lte: 1,
          },
        },
      },
      {
        $sort: { foo: -1 },
      },
      { $limit: 2 },
    ]);
    expect(result).to.deep.equal([
      { id: d4, foo: 'd', bar: 0 },
      { id: d3, foo: 'c', bar: 1 },
    ]);
  });
}
