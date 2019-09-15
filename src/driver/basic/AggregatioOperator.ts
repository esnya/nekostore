import mingo from 'mingo';

/* eslint @typescript-eslint/no-explicit-any: off */
export interface MongoAggregationOperator {
  $limit?: number;
  $sort?: { [key: string]: -1 | 1 };
}

export interface PositionAggregationOperator {
  $endAt?: { [key: string]: any };
  $endBefore?: { [key: string]: any };
  $startAfter?: { [key: string]: any };
  $startAt?: { [key: string]: any };
}

export default interface AggregationOperator
  extends MongoAggregationOperator,
    PositionAggregationOperator {}

export function isMongoOperator(
  operator: AggregationOperator,
): operator is MongoAggregationOperator {
  const keys = ['$limit', '$sort'];
  return Object.keys(operator).every(key => keys.includes(key));
}

export function apply<T>(documents: T[], operator: AggregationOperator): T[] {
  if (isMongoOperator(operator)) throw new TypeError();

  const keys = Object.keys(operator) as (keyof PositionAggregationOperator)[];
  if (keys.length !== 1) throw new TypeError();

  const key = keys[0];
  const field = Object.keys(operator[key])[0];
  const filterQuery = new mingo.Query({
    [field]: {
      $eq: operator[key][field],
    },
  });
  const index = documents.findIndex(d => filterQuery.find([d]).count() > 0);
  if (index < 0) return [];

  switch (key) {
    case '$endAt':
      return documents.slice(0, index + 1);
    case '$endBefore':
      return documents.slice(0, index);
    case '$startAfter':
      return documents.slice(index + 1);
    case '$startAt':
      return documents.slice(index);
  }
}
