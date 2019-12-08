import QuerySnapshot from './QuerySnapshot';
import Nekostore from './Nekosotre';
import InvalidPathError from './InvalidPathError';

export type Value = number | string | boolean | null;

interface QueryObjectBase<T extends string> {
  type: T;
}

export interface AtQuery
  extends QueryObjectBase<'startAt' | 'startAfter' | 'endAt' | 'endBefore'> {
  value: Value;
}

export interface LimitQueryObject extends QueryObjectBase<'limit'> {
  limit: number;
}

export type OrderDirection = 'asc' | 'desc';
export interface OrderByQueryObject extends QueryObjectBase<'orderBy'> {
  fieldPath: string;
  direction: OrderDirection;
}

export type WhereQueryOperator = '==' | '<' | '<=' | '>' | '>=';
export interface WhereQueryObject extends QueryObjectBase<'where'> {
  fieldPath: string;
  operator: WhereQueryOperator;
  value: Value;
}

export type QueryObject =
  | AtQuery
  | LimitQueryObject
  | OrderByQueryObject
  | WhereQueryObject;

export default class Query<T> {
  constructor(
    readonly nekostore: Nekostore,
    readonly path: string,
    readonly query: QueryObject[],
  ) {
    const sPath = path.split(/\//g);
    if (sPath.length % 2 !== 1) throw new InvalidPathError(path, 'Collection');

    const id = sPath[sPath.length - 1];
    if (!id) throw new InvalidPathError(path, 'Collection');

    this.id = id;
  }

  readonly id: string;

  private appendQuery(query: QueryObject): Query<T> {
    return new Query(this.nekostore, this.path, [...this.query, query]);
  }

  startAt(value: Value): Query<T> {
    return this.appendQuery({ type: 'startAt', value });
  }
  startAfter(value: Value): Query<T> {
    return this.appendQuery({ type: 'startAfter', value });
  }
  endBefore(value: Value): Query<T> {
    return this.appendQuery({ type: 'endBefore', value });
  }
  endAt(value: Value): Query<T> {
    return this.appendQuery({ type: 'endAt', value });
  }
  limit(limit: number): Query<T> {
    return this.appendQuery({ type: 'limit', limit });
  }
  orderBy(fieldPath: string, direction: OrderDirection = 'asc'): Query<T> {
    return this.appendQuery({ type: 'orderBy', fieldPath, direction });
  }
  where(
    fieldPath: string,
    operator: WhereQueryOperator,
    value: Value,
  ): Query<T> {
    return this.appendQuery({ type: 'where', fieldPath, operator, value });
  }

  async get(): Promise<QuerySnapshot<T>> {
    return await this.nekostore.driver.getQuery<T>(this.path, this.query);
  }
  async onSnapshot(
    onNext: (snapshot: QuerySnapshot<T>) => void,
  ): Promise<() => void> {
    return await this.nekostore.driver.onQuerySnapshot<T>(
      this.path,
      this.query,
      onNext,
    );
  }
}
