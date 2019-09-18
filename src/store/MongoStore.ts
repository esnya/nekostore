import omit from 'lodash/omit';
import fromPairs from 'lodash/fromPairs';
import Store, { Data } from './Store';
import { Db, Collection, ObjectID } from 'mongodb';
import Timestamp from '../core/Timestamp';
import NotFoundError from '../core/NotFoundError';
import AggregationOperator from '../driver/basic/AggregatioOperator';

export interface Options {
  readonly db: Db;
}

export default class MongoStore implements Store {
  constructor(options: Options) {
    this.db = options.db;
  }

  readonly db: Db;

  private collection(id: string): Collection<Data> {
    return this.db.collection(id);
  }

  async find(
    collectionId: string,
    operators: AggregationOperator[],
  ): Promise<(Data & { id: string })[]> {
    const docs = await this.collection(collectionId)
      .aggregate(operators.length > 0 ? operators : [{ $match: {} }])
      .toArray();
    return docs.map(doc => {
      const { _id, ...data } = doc;
      return {
        ...data,
        id: _id.toHexString(),
      };
    });
  }

  async add(collectionId: string, data: Data): Promise<string> {
    const { insertedId } = await this.collection(collectionId).insertOne(data);
    return insertedId.toHexString();
  }
  async get(collectionId: string, id: string): Promise<Data | undefined> {
    const data = await this.collection(collectionId).findOne({
      _id: new ObjectID(id),
    });
    if (data === undefined || data === null) return undefined;

    return omit(data, '_id');
  }

  async set(collectionId: string, id: string, data: Data): Promise<void> {
    await this.collection(collectionId).updateOne(
      {
        _id: new ObjectID(id),
      },
      { $set: data },
      { upsert: true },
    );
  }

  async update(collectionId: string, id: string, data: Data): Promise<void> {
    const { result } = await this.collection(collectionId).updateOne(
      {
        _id: new ObjectID(id),
      },
      { $set: data },
    );
    if (result.n === 0) {
      throw new NotFoundError(`${collectionId}/${id} does not exsits`);
    }
  }

  async delete(collectionId: string, id: string): Promise<void> {
    await this.collection(collectionId).deleteOne({ _id: new ObjectID(id) });
  }

  serverTimestamps(...fields: string[]): object {
    // return {
    //   $currentDate: fromPairs(fields.map(f => [f, 'timestamp'])),
    // };
    const now = Timestamp.now();
    return fromPairs(fields.map(f => [f, now]));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toTimestamp(value: any): Timestamp {
    if (typeof value !== 'object') throw new TypeError();
    const { seconds, nanoseconds } = value as Record<string, number>;
    return new Timestamp(seconds, nanoseconds);
  }
}
