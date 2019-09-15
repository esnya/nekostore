import Query from '../../../core/Query';
import BasicQuery from '../BasicQuery';

class PlaceQuery<T, U> extends BasicQuery<T> {
  constructor(id: string, prev: Query<T>, ...values: U[]) {
    super(id, prev);
    this.values = values;
  }

  readonly values: U[];
}

export class EndAt<T, U> extends PlaceQuery<T, U> {}
export class EndBefore<T, U> extends PlaceQuery<T, U> {}
export class StartAfter<T, U> extends PlaceQuery<T, U> {}
export class StartAt<T, U> extends PlaceQuery<T, U> {}
