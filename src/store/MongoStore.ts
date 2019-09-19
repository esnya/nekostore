import omit from 'lodash/omit';
import fromPairs from 'lodash/fromPairs';
import Store, { Data } from './Store';
import { Db, Collection, ObjectID, FilterQuery } from 'mongodb';
import Timestamp from '../Timestamp';
import NotFoundError from '../NotFoundError';
import AggregationOperator from '../driver/basic/AggregatioOperator';

export interface Options {
  /**
   * Instance of Db from MongoDB client.
   */
  readonly db: Db;
}

function getIdFilter(id: string): FilterQuery<Data> {
  try {
    return {
      _id: new ObjectID(id),
    };
  } catch (error) {
    return {
      id,
    };
  }
}

/**
 * Store implementation with MongoDB.
 */
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
    const data = await this.collection(collectionId).findOne(getIdFilter(id));
    if (data === undefined || data === null) return undefined;

    return omit(data, '_id', 'id');
  }

  async set(collectionId: string, id: string, data: Data): Promise<void> {
    await this.collection(collectionId).updateOne(
      getIdFilter(id),
      { $set: data },
      { upsert: true },
    );
  }

  async update(collectionId: string, id: string, data: Data): Promise<void> {
    const { result } = await this.collection(collectionId).updateOne(
      getIdFilter(id),
      { $set: data },
    );
    if (result.n === 0) {
      throw new NotFoundError(`${collectionId}/${id} does not exsits`);
    }
  }

  async delete(collectionId: string, id: string): Promise<void> {
    await this.collection(collectionId).deleteOne({ _id: new ObjectID(id) });
  }

  serverTimestamps<T extends {}>(...fields: (keyof T)[]): T {
    // return {
    //   $currentDate: fromPairs(fields.map(f => [f, 'timestamp'])),
    // };
    const now = Timestamp.now(); // ToDo
    return fromPairs(fields.map(f => [f, now])) as T;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toTimestamp(value: any): Timestamp {
    if (typeof value !== 'object') throw new TypeError();
    const { seconds, nanoseconds } = value as Record<string, number>;
    return new Timestamp(seconds, nanoseconds);
  }
}
