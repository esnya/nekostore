import { FilterQuery } from 'mongodb';
import { MongoAggregationOperator } from '../driver/basic/AggregatioOperator';
import Timestamp from '../core/Timestamp';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Data = Record<string, any>;

export default interface Store {
  find(
    collectionId: string,
    filter: FilterQuery<Document>,
    aggregations: MongoAggregationOperator[],
  ): Promise<(Data & { id: string })[]>;
  add(collectionId: string, data: Data): Promise<string>;
  get(collectionId: string, id: string): Promise<Data | undefined>;
  set(collectionId: string, id: string, data: Data): Promise<void>;
  update(collectionId: string, id: string, data: Data): Promise<void>;
  delete(collectionId: string, id: string): Promise<void>;

  serverTimestamps(...fields: string[]): object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toTimestamp(value: any): Timestamp;
}
