import MongoStore from './MongoStore';
import { MongoClient, Db } from 'mongodb';
import testStore from './Store.spec';

describe('MongoStore', () => {
  let db: Db;

  before(async () => {
    const client = new MongoClient('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    after(async () => {
      await client.close();
    });
    db = client.db('nekostore-test');
    await db.dropDatabase();
  });

  testStore(MongoStore, {
    get db(): Db {
      return db;
    },
  });
});
