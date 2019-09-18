import merge from 'lodash/merge';
import uuid from 'uuid';
import NotFoundError from '../NotFoundError';
import mingo from 'mingo';
import AggregationOperator from '../driver/basic/AggregatioOperator';
import Store, { Data } from './Store';
import Timestamp from '../Timestamp';
import fromPairs from 'lodash/fromPairs';

interface Document extends Data {
  id: string;
}

type Collection = Map<string, Data>;

export default class MemoryStore implements Store {
  readonly store = new Map<string, Collection>();

  private getCollection(id: string): Collection {
    if (!this.store.has(id)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const collection = new Map<string, Data>();
      this.store.set(id, collection);
      return collection;
    }
    return this.store.get(id);
  }

  async list(collectionId: string): Promise<Document[]> {
    const collection = this.getCollection(collectionId);
    return Array.from(collection.entries()).map(([id, data]) => ({
      ...data,
      id,
    }));
  }

  async find(
    collectionId: string,
    aggregations: AggregationOperator[],
  ): Promise<Document[]> {
    const documents = await this.list(collectionId);
    if (aggregations.length === 0) return documents;
    return new mingo.Aggregator(aggregations).run<Document>(documents);
  }

  async add(collectionId: string, data: Data): Promise<string> {
    const id = uuid.v4();

    const collection = this.getCollection(collectionId);
    collection.set(id, data);

    return id;
  }

  async get(collectionId: string, id: string): Promise<Data | undefined> {
    const collection = this.getCollection(collectionId);
    return collection.has(id) ? collection.get(id) : undefined;
  }

  async set(collectionId: string, id: string, data: Data): Promise<void> {
    this.getCollection(collectionId).set(id, data);
  }

  async update(collectionId: string, id: string, data: Data): Promise<void> {
    const oldValue = await this.get(collectionId, id);
    if (oldValue === undefined) {
      throw new NotFoundError(`${collectionId}/${id} does not exsits`);
    }
    await this.set(collectionId, id, merge(oldValue, data));
  }

  async delete(collectionId: string, id: string): Promise<void> {
    this.getCollection(collectionId).delete(id);
  }

  serverTimestamps(...fields: string[]): object {
    const now = Date.now();
    return fromPairs(fields.map(f => [f, now]));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toTimestamp(value: any): Timestamp {
    return Timestamp.fromMillis(Number(value));
  }
}
