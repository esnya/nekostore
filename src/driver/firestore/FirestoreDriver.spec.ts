import firebase from 'firebase/app';
import 'firebase/firestore';
import runEmulators from '../../../tests/firebaseEmulator';
import initializeApp from '../../../tests/firebaseInitialize';
import FirestoreDriver from './FirestoreDriver';
import { testDriver } from '../../../tests/driver';

interface T1 {
  t1: string;
}

describe('FirestoreDriver', () => {
  before(async () => {
    await runEmulators();
    await initializeApp();
  });

  it('is driver', async () => {
    const driver = new FirestoreDriver(firebase.firestore());
    testDriver(driver);
  });
});
