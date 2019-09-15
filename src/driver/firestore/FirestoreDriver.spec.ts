import { expect } from 'chai';
import { fake } from 'sinon';
import firebase from 'firebase/app';
import 'firebase/firestore';
import runEmulators from '../../../tests/firebaseEmulator';
import initializeApp from '../../../tests/firebaseInitialize';
import Nekostore from '../../nekostore';
import FirestoreDriver from './FirestoreDriver';
import CollectionReference from '../../core/CollectionReference';
import FirestoreCollectionReference from './FirestoreCollectionReference';
import FirestoreDocumentReference from './FirestoreDocumentReference';
import DocumentReference from '../../core/DocumentReference';
import DocumentNotFoundError from '../../core/NotFoundError';
import DocumentSnapshot from '../../core/DocumentSnapshot';
import Unsubscribe from '../../core/Unsubscribe';
import QuerySnapshot from '../../core/QuerySnapshot';

interface T1 {
  t1: string;
}

describe('FirestoreDriver', () => {
  before(async () => {
    await runEmulators();
    await initializeApp();
  });

  let nekostore: Nekostore;
  it('initialized', async () => {
    const driver = new FirestoreDriver(firebase.firestore());
    nekostore = new Nekostore(driver);
  });

  after(async () => {
    const snapshot = await nekostore.collection('c1').get();
    await Promise.all(snapshot.docs.map(doc => doc.ref.delete()));
  });

  let c1: CollectionReference<T1>;
  describe('collection', () => {
    it('is collection', () => {
      c1 = nekostore.collection('c1');
      expect(c1).instanceOf(FirestoreCollectionReference);
      expect(c1.id).to.equal('c1');
      expect(c1.path).to.equal('c1');
    });

    let d1: DocumentReference<T1>;
    it('adds new document', async () => {
      d1 = await c1.add({
        t1: 'a',
      });
      expect(d1).instanceOf(FirestoreDocumentReference);
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
      expect(snapshot.ref).instanceOf(FirestoreCollectionReference);
      expect(snapshot.docs.length).to.equal(2);

      snapshot.docs.forEach((doc, i) => {
        expect(doc.ref).instanceOf(FirestoreDocumentReference);
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

  describe('documents', () => {
    let d1: DocumentReference<T1>;
    it('gets reference', () => {
      d1 = c1.doc('d1');
      expect(d1).instanceOf(FirestoreDocumentReference);
      expect(d1.id).to.equal('d1');
      expect(d1.path).to.equal('c1/d1');
      expect(d1.parent).instanceOf(FirestoreCollectionReference);
      expect(d1.parent.path).to.equal(c1.path);
    });

    it('gets empty snapshot', async () => {
      const snapshot = await d1.get();
      expect(snapshot.ref).instanceOf(FirestoreDocumentReference);
      expect(snapshot.ref.path).to.equal('c1/d1');
      expect(snapshot.exists()).to.be.false;
      expect(snapshot.data).is.undefined;
      expect(snapshot.createTime).is.undefined;
      expect(snapshot.updateTime).is.undefined;
    });

    it('throw error when updating empty', async () => {
      await expect(d1.update({})).to.rejectedWith(DocumentNotFoundError);
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
});
