/* eslint @typescript-eslint/no-explicit-any: off */
import { FilterQuery } from 'mongodb';

export default interface AggregationOperator {
  $match?: FilterQuery<any>;
  $limit?: number;
  $sort?: { [key: string]: -1 | 1 };
}
