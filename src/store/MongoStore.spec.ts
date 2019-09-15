import MongoStore from './MongoStore';
import BasicDriver from '../driver/basic';
import { testDriver } from '../../tests/driver';
import { MongoClient } from 'mongodb';

function connect(): Promise<MongoClient> {
  return new Promise((resolve, reject): void => {
    MongoClient.connect('mongodb://localhost:27017', (error, client) => {
      if (error) return reject(error);
      resolve(client);
    });
  });
}

describe('MongoStore', () => {
  it('is store', async () => {
    const client = await connect();

    const db = client.db('nekostore-test');
    await db.dropDatabase();
    const store = new MongoStore(db);

    testDriver(
      new BasicDriver({ store }),
      'BasicDriver with MongoStore',
      () => {
        client.close(true);
      },
    );
  });
});
