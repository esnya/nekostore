import firebase from 'firebase/app';
import 'firebase/firestore';
import tools from 'firebase-tools';
import FirestoreDriver from './FirestoreDriver';
import testDriver from '../Driver.spec';

describe('FirestoreDriver', () => {
  before(async () => {
    try {
      firebase.app();
    } catch (error) {
      if (error.code !== 'app/no-app') throw error;

      const config = await tools.setup.web();
      firebase.initializeApp(config);
    }
  });

  after(async () => {
    await firebase.app().delete();
  });

  testDriver(FirestoreDriver, async () => [firebase.firestore()]);
});
