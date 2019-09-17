import firebase from 'firebase/app';
import 'firebase/firestore';
import runEmulators from '../../../tests/firebaseEmulator';
import initializeApp from '../../../tests/firebaseInitialize';
import FirestoreDriver from './FirestoreDriver';
import testDriver from '../Driver.spec';

describe('FirestoreDriver', () => {
  before(async () => {
    await runEmulators();
    await initializeApp();
  });

  testDriver(FirestoreDriver, async () => [firebase.firestore()]);
});
