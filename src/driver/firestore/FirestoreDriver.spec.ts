import { expect } from 'chai';
import firebase from 'firebase/app';
import 'firebase/firestore';
import _ from 'lodash';
import runEmulators from '../../../tests/firebaseEmulator';
import initializeApp from '../../../tests/firebaseInitialize';
import Nekostore from '../../nekostore';
import FirestoreDriver from './FirestoreDriver';
import CollectionReference from '../../core/CollectionReference';
import FirestoreCollectionReference from './FirestoreCollectionReference';
import FirestoreDocumentReference from './FirestoreDocumentReference';
import DocumentReference from '../../core/DocumentReference';
import DocumentNotFoundError from '../../core/NotFoundError';
import Timestamp from '../../core/Timestamp';
import DocumentSnapshot from '../../core/DocumentSnapshot';

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

    it('adds new document', async () => {
      const d1 = await c1.add({
        t1: 'a',
      });
      expect(d1).instanceOf(FirestoreDocumentReference);

      after(async () => {
        await d1.delete();
      });
    });

    it('gets snapshot', async () => {
      const d2 = await c1.add({ t1: 'b' });
      after(async () => {
        await d2.delete();
      });

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

    it('sets', async () => {
      await d1.set({
        t1: 'c',
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

    it('sets again', async () => {
      await d1.set({
        t1: 'e',
      });

      const snapshot = await d1.get();
      const { createTime, updateTime } = assertSnapshot(snapshot, { t1: 'e' });
      expect(createTime).is.lte(Date.now());
      expect(updateTime).to.equal(createTime);
    });

    it('deletes', async () => {
      await d1.delete();

      const snapshot = await d1.get();
      expect(snapshot.exists()).to.be.false;
    });
  });
});
