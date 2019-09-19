/* eslint @typescript-eslint/no-use-before-define: off */
import mapValues from 'lodash/mapValues';
import Query, { WhereOperator, OrderDirection } from '../../../Query';
import QuerySnapshot from '../../../QuerySnapshot';
import Unsubscribe from '../../../Unsubscribe';
import BasicDriver from '..';
import BasicDocumentReference from './BasicDocumentReference';
import BasicCollectionReference from './BasicCollectionReference';
import { FilterQuery, QuerySelector } from 'mongodb';
import AggregationOperator from '../AggregatioOperator';
import BasicDocumentChange from './BasicDocumentChange';

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
    operators: AggregationOperator[] = [],
  ) {
    this.driver = driver;
    this.id = id;
    this.parent = parent;
    this.operators = operators;
  }

  readonly driver: BasicDriver;
  readonly id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly parent: BasicDocumentReference<any>;
  readonly operators: AggregationOperator[];

  get path(): string {
    if (this.parent) return `${this.parent.path}/${this.id}`;
    return this.id;
  }

  private chainMatch<U>(match: FilterQuery<U>): Query<T> {
    return this.chainOperator({ $match: match });
  }

  private chainOperator(operator: AggregationOperator): Query<T> {
    return new BasicQuery<T>(this.driver, this.id, this.parent, [
      ...this.operators,
      operator,
    ]);
  }

  private chainAt<U>(ascOp: string, descOp: string, value: U): Query<T> {
    const sort = this.operators.slice(-1)[0];
    if (!sort || !('$sort' in sort)) {
      throw new Error('Last operator is not $sort');
    }
    const filter = mapValues(sort.$sort, dir => {
      const op = dir === 1 ? ascOp : descOp;
      return { [op]: value };
    });
    return this.chainMatch(filter);
  }

  endAt<U>(value: U): Query<T> {
    return this.chainAt('$lte', '$gte', value);
  }
  endBefore<U>(value: U): Query<T> {
    return this.chainAt('$lt', '$gt', value);
  }
  limit(limit: number): Query<T> {
    return this.chainOperator({ $limit: limit });
  }
  orderBy(field: string, direction?: OrderDirection): Query<T> {
    return this.chainOperator({
      $sort: { [field]: direction === 'desc' ? -1 : 1 },
    });
  }
  startAfter<U>(value: U): Query<T> {
    return this.chainAt('$gt', '$lt', value);
  }
  startAt<U>(value: U): Query<T> {
    return this.chainAt('$gte', '$lte', value);
  }
  where<U>(field: string, operator: WhereOperator, value: U): Query<T> {
    return this.chainMatch({
      [field]: {
        [WhereOperatorTable[operator]]: value,
      },
    } as FilterQuery<T>);
  }

  async get(): Promise<QuerySnapshot<T>> {
    const documents = await this.driver.store.find(this.path, this.operators);
    const collectionRef = new BasicCollectionReference<T>(
      this.driver,
      this.id,
      this.parent,
    );

    return {
      ref: this,
      docs: documents.map((doc, i) => {
        const { id, ...data } = doc;

        return new BasicDocumentChange<T>(
          new BasicDocumentReference<T>(collectionRef, id),
          { type: 'added', newIndex: i, oldIndex: -1 },
          data,
        );
      }),
    };
  }

  async onSnapshot(
    onNext: (snapshot: QuerySnapshot<T>) => void,
  ): Promise<Unsubscribe> {
    if (this.operators.length > 0) throw new Error('Query is not supported');

    setTimeout(async () => {
      onNext(await this.get());
    });
    this.driver.eventEmitter.on(this.path, onNext);
    return async (): Promise<void> => {
      this.driver.eventEmitter.off(this.path, onNext);
    };
  }
}
