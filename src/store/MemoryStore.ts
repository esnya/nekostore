import merge from 'lodash/merge';
import uuid from 'uuid';
import NotFoundError from '../NotFoundError';
import mingo from 'mingo';
import AggregationOperator from '../AggregationOperator';
import Store, { Data, DataWithId } from './Store';

type Collection = Map<string, Data>;

/**
 * Non-persistent store implementation with local memory.
 */
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

  async list(collectionId: string): Promise<DataWithId[]> {
    const collection = this.getCollection(collectionId);
    return Array.from(collection.entries()).map(([id, data]) => ({
      ...data,
      id,
    }));
  }

  async find(
    collectionId: string,
    aggregations: AggregationOperator[],
  ): Promise<DataWithId[]> {
    const documents = await this.list(collectionId);
    if (aggregations.length === 0) return documents;
    return new mingo.Aggregator(aggregations).run<DataWithId>(documents);
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
      throw new NotFoundError(`${collectionId}/${id} does not exists`);
    }
    await this.set(collectionId, id, merge(oldValue, data));
  }

  async delete(collectionId: string, id: string): Promise<void> {
    this.getCollection(collectionId).delete(id);
  }
}
