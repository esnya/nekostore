import { initializeTestApp } from '@firebase/testing';
import { EmulatorServer } from 'firebase-tools/lib/emulator/emulatorServer';
import { FirestoreEmulator } from 'firebase-tools/lib/emulator/firestoreEmulator';
import FirestoreDriver from './FirestoreDriver';
import testDriver from '../Driver.spec';

describe('FirestoreDriver', () => {
  let app: firebase.app.App;
  before(async () => {
    const emulator = new EmulatorServer(new FirestoreEmulator({}));
    await emulator.start();
    after(async () => {
      await emulator.stop();
    });

    app = await initializeTestApp({
      projectId: 'nekostore-dev-923b4',
      auth: { uid: 'test' },
    });
  });

  after(() => {
    app.delete();
  });

  testDriver(async () => new FirestoreDriver(app.firestore()));
});
