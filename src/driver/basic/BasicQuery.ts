/* eslint @typescript-eslint/no-use-before-define: off */
import Query, { WhereOperator, OrderDirection } from '../../core/Query';
import QuerySnapshot from '../../core/QuerySnapshot';
import Unsubscribe from '../../core/Unsubscribe';
import { EndAt, EndBefore, StartAfter, StartAt } from './query/PlaceQuery';
import Limit from './query/Limit';
import OrderBy from './query/OrderBy';
import Where from './query/Where';

export default class BasicQuery<T> implements Query<T> {
  constructor(id: string, prev?: Query<T>) {
    this.id = id;
    this.prev = prev;
  }

  readonly id: string;
  readonly prev?: Query<T>;

  endAt<U>(...values: U[]): Query<T> {
    return new EndAt<T, U>(this.id, this, ...values);
  }
  endBefore<U>(...values: U[]): Query<T> {
    return new EndBefore<T, U>(this.id, this, ...values);
  }
  limit(limit: number): Query<T> {
    return new Limit<T>(this.id, this, limit);
  }
  orderBy(field: string, direction?: OrderDirection): Query<T> {
    return new OrderBy(this.id, this, field, direction || 'asc');
  }
  startAfter<U>(...values: U[]): Query<T> {
    return new StartAfter<T, U>(this.id, this, ...values);
  }
  startAt<U>(...values: U[]): Query<T> {
    return new StartAt<T, U>(this.id, this, ...values);
  }
  where<U>(field: string, operator: WhereOperator, value: U): Query<T> {
    return new Where<T, U>(this.id, this, field, operator, value);
  }

  get(): Promise<QuerySnapshot<T>> {
    throw new Error('ToDo');
  }
  onSnapshot(onNext: (snapshot: QuerySnapshot<T>) => void): Unsubscribe {
    console.log(onNext);
    throw new Error('ToDo');
  }
}
