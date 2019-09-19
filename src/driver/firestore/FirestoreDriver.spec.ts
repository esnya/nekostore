import { initializeTestApp, loadFirestoreRules } from '@firebase/testing';
import { EmulatorServer } from 'firebase-tools/lib/emulator/emulatorServer';
import { FirestoreEmulator } from 'firebase-tools/lib/emulator/firestoreEmulator';
import RC from 'firebase-tools/lib/rc';
import { promises as fs } from 'fs';
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

    const rc = RC.loadFile('.firebaserc');
    const projectId = rc.get('projects.default');

    app = await initializeTestApp({
      projectId,
      auth: { uid: 'alice' },
    });
    await loadFirestoreRules({
      projectId,
      rules: await fs.readFile('firebase/firestore.rules', 'utf8'),
    });
  });

  after(() => {
    app.delete();
  });

  testDriver(async () => new FirestoreDriver(app.firestore()));
});
