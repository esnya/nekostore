import BasicQuery from '../BasicQuery';
import Query from '../../../core/Query';

export default class Limit<T> extends BasicQuery<T> {
  constructor(id: string, prev: Query<T>, limit: number) {
    super(id, prev);
    this.n = limit;
  }

  readonly n: number;
}
