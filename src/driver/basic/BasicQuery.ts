/* eslint @typescript-eslint/no-use-before-define: off */
import Query, { WhereOperator, OrderDirection } from '../../core/Query';
import QuerySnapshot from '../../core/QuerySnapshot';
import Unsubscribe from '../../core/Unsubscribe';
import BasicDriver from '.';
import BasicDocumentReference from './BasicDocumentReference';
import BasicCollectionReference from './BasicCollectionReference';
import { RootQuerySelector, FilterQuery, QuerySelector } from 'mongodb';
import AggregationOperator, {
  isMongoOperator,
  PositionAggregationOperator,
  apply,
} from './AggregatioOperator';
import NekostoreError from '../../core/NekostoreError';
import BasicDocumentChange from './BasicDocumentChange';

function concatFilter<T>(
  filter: FilterQuery<T>,
  baseFilter?: FilterQuery<T>,
): FilterQuery<T> {
  if (!baseFilter) return filter;
  if (baseFilter.$and)
    return {
      ...baseFilter,
      $and: [...baseFilter.$and, filter],
    };

  return ({
    $and: [baseFilter, filter],
  } as RootQuerySelector<T>) as FilterQuery<T>;
}

const WhereOperatorTable: Record<WhereOperator, keyof QuerySelector<{}>> = {
  '==': '$eq',
  '<': '$lt',
  '<=': '$lte',
  '>': '$gt',
  '>=': '$gte',
};

export default class BasicQuery<T> implements Query<T> {
  constructor(
    driver: BasicDriver,
    id: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parent?: BasicDocumentReference<any>,
    filter?: FilterQuery<T>,
    aggregations: AggregationOperator[] = [],
  ) {
    this.driver = driver;
    this.id = id;
    this.parent = parent;
    this.filter = filter;
    this.aggregations = aggregations;
  }

  readonly driver: BasicDriver;
  readonly id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly parent: BasicDocumentReference<any>;
  readonly filter: FilterQuery<T>;
  readonly aggregations: AggregationOperator[];

  get path(): string {
    if (this.parent) return `${this.parent.path}/${this.id}`;
    return this.id;
  }

  private chain(
    filter?: FilterQuery<T>,
    aggregation?: AggregationOperator,
  ): Query<T> {
    return new BasicQuery<T>(
      this.driver,
      this.id,
      this.parent,
      filter ? concatFilter(filter, this.filter) : this.filter,
      aggregation ? [...this.aggregations, aggregation] : this.aggregations,
    );
  }

  private chainPosition<U>(
    operator: keyof PositionAggregationOperator,
    value: U,
  ): Query<T> {
    const lastOperator = this.aggregations[this.aggregations.length - 1];

    if (!lastOperator.$sort) {
      throw new NekostoreError('query', 'Missing previous query "orderBy"');
    }

    const fields = Object.keys(lastOperator.$sort);
    if (fields.length !== 1) {
      throw new NekostoreError('query', 'Invalid previous query');
    }

    const field = fields[0];

    return this.chain(undefined, { [operator]: { [field]: value } });
  }

  endAt<U>(value: U): Query<T> {
    return this.chainPosition('$endAt', value);
  }
  endBefore<U>(value: U): Query<T> {
    return this.chainPosition('$endBefore', value);
  }
  limit(limit: number): Query<T> {
    return this.chain(undefined, { $limit: limit });
  }
  orderBy(field: string, direction?: OrderDirection): Query<T> {
    return this.chain(undefined, {
      $sort: { [field]: direction === 'desc' ? -1 : 1 },
    });
  }
  startAfter<U>(value: U): Query<T> {
    return this.chainPosition('$startAfter', value);
  }
  startAt<U>(value: U): Query<T> {
    return this.chainPosition('$startAt', value);
  }
  where<U>(field: string, operator: WhereOperator, value: U): Query<T> {
    return this.chain({
      [field]: {
        [WhereOperatorTable[operator]]: value,
      },
    } as FilterQuery<T>);
  }

  async get(): Promise<QuerySnapshot<T>> {
    const documents = await this.driver.store.find(
      this.path,
      this.filter || {},
      this.aggregations.filter(isMongoOperator),
    );
    const aggregateds = this.aggregations
      .filter(a => !isMongoOperator(a))
      .reduce(apply, documents);
    const collectionRef = new BasicCollectionReference<T>(
      this.driver,
      this.id,
      this.parent,
    );

    return {
      ref: this,
      docs: aggregateds.map((doc, i) => {
        const { id, ...data } = doc;

        return new BasicDocumentChange<T>(
          new BasicDocumentReference<T>(collectionRef, id),
          { type: 'added', newIndex: i, oldIndex: -1 },
          data,
        );
      }),
    };
  }

  onSnapshot(onNext: (snapshot: QuerySnapshot<T>) => void): Unsubscribe {
    if (this.filter) throw new Error('Query is not supported');

    setTimeout(async () => {
      onNext(await this.get());
    });
    return this.driver.eventBus.on(this.path, onNext);
  }
}
