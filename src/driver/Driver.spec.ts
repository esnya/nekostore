import { expect } from 'chai';
import { fake } from 'sinon';
import CollectionReference from '../CollectionReference';
import Nekostore from '../Nekostore';
import DocumentReference from '../DocumentReference';
import Driver from '../Driver';
import QuerySnapshot from '../QuerySnapshot';
import Unsubscribe from '../Unsubscribe';
import DocumentSnapshot from '../DocumentSnapshot';

interface T1 {
  t1: string;
}

function sleep(t?: number): Promise<void> {
  return new Promise((resolve): void => {
    setTimeout(resolve, t || 100);
  });
}

export default function testDriver(getDriver: () => Promise<Driver>): void {
  let nekostore: Nekostore;
  it('can instantiate', async () => {
    const driver = await getDriver();
    nekostore = new Nekostore(driver);
  });

  let prefix: string | null = null;

  let c1: CollectionReference<T1>;
  it('generates collection reference', () => {
    c1 = nekostore.collection<T1>('c1');
    expect(c1.id).to.equal('c1');
    expect(c1.path).to.equal(prefix ? `${prefix}/c1` : 'c1');
  });

  let d1: DocumentReference<T1>;

  async function clean(): Promise<void> {
    const snapshot = await c1.get();
    await Promise.all(snapshot.docs.map(d => d.ref.delete()));
  }

  function testCollection(): void {
    before(clean);
    after(clean);

    it('adds new document', async () => {
      d1 = await c1.add({
        t1: 'a',
      });
    });

    const onNext = fake();
    let unsubscribe: Unsubscribe;
    it('subscribes', async () => {
      unsubscribe = await c1.onSnapshot(onNext);
      await sleep();
    });

    it('receives initial snapshot', async () => {
      expect(onNext).to.calledOnce;
      const snapshot: QuerySnapshot<T1> = onNext.lastCall.args[0];

      expect(snapshot.docs.length).to.equal(1);
      const [doc] = snapshot.docs;
      expect(doc.type).to.equal('added');
      expect(doc.data).to.deep.equal({ t1: 'a' });

      onNext.resetHistory();
    });

    it('gets snapshot', async () => {
      await c1.add({ t1: 'b' });
      await sleep();

      const snapshot = await c1.get();
      expect(snapshot.docs.length).to.equal(2);

      snapshot.docs.forEach((doc, i) => {
        expect(doc.type).to.equal('added');
        expect(doc.newIndex).to.equal(i);
        expect(doc.oldIndex).to.equal(-1);
        expect(doc.exists()).to.be.true;
        if (doc.exists()) {
          expect(doc.data.t1).oneOf(['a', 'b']);
          expect(doc.createTime.toMillis()).is.lessThan(Date.now() * 1000);
          expect(doc.updateTime.toMillis()).is.equal(doc.createTime.toMillis());
        }
      });
    });

    it('receives added snapshot', async () => {
      expect(onNext).called;

      const snapshot: QuerySnapshot<T1> = onNext.getCalls()[0].args[0];
      expect(snapshot.docs.length).to.equal(1);

      const added = snapshot.docs[0];
      expect(added.type).to.equal('added');
      expect(added.data).to.deep.equal({ t1: 'b' });

      onNext.resetHistory();
    });

    it('receives updated snapshot', async () => {
      await d1.update({ t1: 'c' });

      expect(onNext).called;

      const snapshot: QuerySnapshot<T1> = onNext.lastCall.args[0];
      expect(snapshot.docs.length).to.equal(1);

      const doc = snapshot.docs[0];
      expect(doc.type).to.equal('modified');
      expect(doc.data).to.deep.equal({ t1: 'c' });

      onNext.resetHistory();
    });

    it('receives removed snapshot', async () => {
      await d1.delete();

      expect(onNext).called;

      const snapshot: QuerySnapshot<T1> = onNext.lastCall.args[0];
      expect(snapshot.docs.length).to.equal(1);

      const removed = snapshot.docs[0];
      expect(removed.type).to.equal('removed');

      onNext.resetHistory();
    });

    it('unsubscribes', async () => {
      await unsubscribe();
    });

    it('should not receives', async () => {
      await d1.set({ t1: 'd' });
      expect(onNext).not.to.be.called;
    });
  }

  function testDocument(): void {
    before(clean);
    after(clean);

    const id = '123456781234567812345678';

    after(async () => {
      await d1.delete();
    });

    it('gets reference', () => {
      d1 = c1.doc(id);
      expect(d1.id).to.equal(id);
      expect(d1.path).to.equal(prefix ? `${prefix}/c1/${id}` : `c1/${id}`);
      expect(d1.parent.path).to.equal(prefix ? `${prefix}/c1` : 'c1');
    });

    it('gets empty snapshot', async () => {
      const snapshot = await d1.get();
      expect(snapshot.ref.path).to.equal(
        prefix ? `${prefix}/c1/${id}` : `c1/${id}`,
      );
      expect(snapshot.exists()).to.be.false;
      expect(snapshot.data).is.undefined;
      expect(snapshot.createTime).is.undefined;
      expect(snapshot.updateTime).is.undefined;
    });

    it('throw error when updating empty', async () => {
      await expect(d1.update({})).to.rejected;
    });

    it('deletes empty', async () => {
      await d1.delete();
    });

    const onNext = fake();
    let unsubscribe: Unsubscribe;
    it('watch snapshots', async () => {
      unsubscribe = await d1.onSnapshot(onNext);
      expect(unsubscribe).is.instanceOf(Function);
      expect(onNext).not.called;
    });

    it('sets', async () => {
      await d1.set({
        t1: 'c',
      });
    });

    it('receives snapshot', () => {
      expect(onNext).calledWithMatch((snapshot: DocumentSnapshot<T1>) => {
        return snapshot.exists() && snapshot.data.t1 === 'c';
      });
    });

    function assertSnapshot(
      snapshot: DocumentSnapshot<T1>,
      data: T1,
    ): { createTime: number; updateTime: number } {
      expect(snapshot.exists()).to.be.true;
      if (snapshot.exists()) {
        expect(snapshot.data).to.deep.equal(data);
        expect(snapshot.createTime).is.not.undefined;
        expect(snapshot.updateTime).is.not.undefined;

        return {
          createTime: snapshot.createTime.toMillis(),
          updateTime: snapshot.updateTime.toMillis(),
        };
      }
      throw new Error();
    }

    it('gets', async () => {
      const snapshot = await d1.get();
      const { createTime, updateTime } = assertSnapshot(snapshot, { t1: 'c' });
      expect(createTime).is.lte(Date.now());
      expect(updateTime).to.equal(createTime);
    });

    it('updates', async () => {
      await d1.update({ t1: 'd' });

      const snapshot = await d1.get();
      assertSnapshot(snapshot, { t1: 'd' });
    });

    xit('updates updateTime', async () => {
      const snapshot = await d1.get();
      const { createTime, updateTime } = assertSnapshot(snapshot, { t1: 'd' });
      expect(updateTime).is.lte(Date.now());
      expect(updateTime).is.greaterThan(createTime);
    });

    it('receives snapshot', () => {
      expect(onNext).calledWithMatch((snapshot: DocumentSnapshot<T1>) => {
        return snapshot.exists() && snapshot.data.t1 === 'd';
      });
    });

    it('sets again', async () => {
      await d1.set({
        t1: 'e',
      });
      await sleep();
      const snapshot = await d1.get();
      const { createTime, updateTime } = assertSnapshot(snapshot, { t1: 'e' });
      expect(createTime).is.lte(Date.now());
      expect(updateTime).to.equal(createTime);
    });

    it('receives snapshot', () => {
      expect(onNext).calledWithMatch((snapshot: DocumentSnapshot<T1>) => {
        return snapshot.exists() && snapshot.data.t1 === 'e';
      });
    });

    it('deletes', async () => {
      await d1.delete();

      const snapshot = await d1.get();
      expect(snapshot.exists()).to.be.false;
    });

    it('receives snapshot', () => {
      expect(onNext).calledWithMatch((snapshot: DocumentSnapshot<T1>) => {
        return !snapshot.exists();
      });
    });

    it('unsubscirbes', async () => {
      onNext.resetHistory();
      await unsubscribe();

      await d1.set({
        t1: 'e',
      });
      await d1.delete();

      expect(onNext).not.called;
    });
  }

  function testQuery(): void {
    before(clean);
    after(clean);

    before(async () => {
      const items: T1[] = [{ t1: 'a' }, { t1: 'b' }, { t1: 'c' }];
      await Promise.all(
        items.map(async item => {
          await c1.add(item);
        }),
      );
    });

    it('queries limit', async () => {
      const snapshot = await c1.limit(2).get();
      expect(snapshot.docs.length).to.equal(2);
    });

    it('queries orderBy', async () => {
      const snapshot = await c1.orderBy('t1').get();
      expect(snapshot.docs.map(d => d.data.t1)).to.deep.equal(['a', 'b', 'c']);
    });

    it('queries orderBy(asc)', async () => {
      const snapshot = await c1.orderBy('t1', 'asc').get();
      expect(snapshot.docs.map(d => d.data.t1)).to.deep.equal(['a', 'b', 'c']);
    });

    it('queries orderBy(desc)', async () => {
      const snapshot = await c1.orderBy('t1', 'desc').get();
      expect(snapshot.docs.map(d => d.data.t1)).to.deep.equal(['c', 'b', 'a']);
    });

    it('queries where', async () => {
      const snapshot = await c1.where('t1', '>=', 'b').get();
      expect(snapshot.docs.map(d => d.data.t1).sort()).to.deep.equal([
        'b',
        'c',
      ]);
    });

    it('queries endAt', async () => {
      const snapshot = await c1
        .orderBy('t1')
        .endAt('b')
        .get();
      expect(snapshot.docs.map(d => d.data.t1)).to.deep.equal(['a', 'b']);
    });

    it('queries endBefore', async () => {
      const snapshot = await c1
        .orderBy('t1')
        .endBefore('b')
        .get();
      expect(snapshot.docs.map(d => d.data.t1)).to.deep.equal(['a']);
    });

    it('queries startAfter', async () => {
      const snapshot = await c1
        .orderBy('t1')
        .startAfter('b')
        .get();
      expect(snapshot.docs.map(d => d.data.t1)).to.deep.equal(['c']);
    });

    it('queries startAt', async () => {
      const snapshot = await c1
        .orderBy('t1')
        .startAt('b')
        .get();
      expect(snapshot.docs.map(d => d.data.t1)).to.deep.equal(['b', 'c']);
    });
  }

  describe('collections', testCollection);
  describe('documents', testDocument);
  describe('queries', testQuery);

  describe('nested', () => {
    it('generates nested collection reference', () => {
      c1 = d1.collection('c1');
      prefix = d1.path;
    });

    describe('collections', testCollection);
    describe('documents', testDocument);
    describe('queries', testQuery);
  });
}
