import { expect } from 'chai';
import { fake } from 'sinon';
import CollectionReference from '../src/core/CollectionReference';
import Nekostore from '../src/nekostore';
import DocumentReference from '../src/core/DocumentReference';
import Driver from '../src/core/Driver';
import QuerySnapshot from '../src/core/QuerySnapshot';
import Unsubscribe from '../src/core/Unsubscribe';
import NotFoundError from '../src/core/NotFoundError';
import DocumentSnapshot from '../src/core/DocumentSnapshot';

interface T1 {
  t1: string;
}

function cleaner(c: CollectionReference<T1>): void {
  after(async () => {
    const snapshot = await c.get();
    await Promise.all(snapshot.docs.map(doc => doc.ref.delete()));
  });
}

function testCollection(
  nekostore: Nekostore,
  parent?: DocumentReference<T1>,
): void {
  function prefixPath(path: string): string {
    return parent ? `${parent.path}/${path}` : path;
  }

  describe('collection', () => {
    let c1: CollectionReference<T1>;

    it('is collection', () => {
      c1 = (parent || nekostore).collection<T1>('c1');
      cleaner(c1);
      expect(c1.id).to.equal('c1');
      expect(c1.path).to.equal(prefixPath('c1'));
    });

    let d1: DocumentReference<T1>;
    it('adds new document', async () => {
      d1 = await c1.add({
        t1: 'a',
      });
    });

    const onNext = fake();
    let unsubscribe: Unsubscribe;
    it('subscribes', async () => {
      unsubscribe = c1.onSnapshot(onNext);
      await new Promise(resolve => setTimeout(resolve, 1000));
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

    it('receives snapshot', () => {
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

    it('unsubscribes', () => {
      unsubscribe();
    });

    it('should not receives', async () => {
      await d1.set({ t1: 'd' });
      expect(onNext).not.to.be.called;
    });
  });
}

function testDocument(
  nekostore: Nekostore,
  parent?: DocumentReference<T1>,
): void {
  function prefixPath(path: string): string {
    return parent ? `${parent.path}/${path}` : path;
  }

  describe('documents', () => {
    const c1 = (parent || nekostore).collection<T1>('c1');
    cleaner(c1);
    let d1: DocumentReference<T1>;
    it('gets reference', () => {
      d1 = c1.doc('d1');
      expect(d1.id).to.equal('d1');
      expect(d1.path).to.equal(prefixPath('c1/d1'));
      expect(d1.parent.path).to.equal(c1.path);
    });

    it('gets empty snapshot', async () => {
      const snapshot = await d1.get();
      expect(snapshot.ref.path).to.equal(prefixPath('c1/d1'));
      expect(snapshot.exists()).to.be.false;
      expect(snapshot.data).is.undefined;
      expect(snapshot.createTime).is.undefined;
      expect(snapshot.updateTime).is.undefined;
    });

    it('throw error when updating empty', async () => {
      await expect(d1.update({})).to.rejectedWith(NotFoundError);
    });

    it('deletes empty', async () => {
      await d1.delete();
    });

    const onNext = fake();
    let unsubscribe: Unsubscribe;
    it('watch snapshots', () => {
      unsubscribe = d1.onSnapshot(onNext);
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

        return {
          createTime: snapshot.createTime.toMillis() / 1000,
          updateTime: snapshot.updateTime.toMillis() / 1000,
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
      unsubscribe();

      await d1.set({
        t1: 'e',
      });
      await d1.delete();

      expect(onNext).not.called;
    });
  });
}

export function testDriver(driver: Driver): void {
  describe(driver.constructor.name, () => {
    const nekostore = new Nekostore(driver);
    testCollection(nekostore);
    testDocument(nekostore);

    describe('nested', () => {
      const parent = nekostore.collection<T1>('c1').doc('d1');
      testCollection(nekostore, parent);
      testDocument(nekostore, parent);
    });
  });
}
