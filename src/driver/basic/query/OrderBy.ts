import BasicQuery from '../BasicQuery';
import Query, { OrderDirection } from '../../../core/Query';

export default class OrderBy<T> extends BasicQuery<T> {
  constructor(
    id: string,
    prev: Query<T>,
    field: string,
    direction: OrderDirection,
  ) {
    super(id, prev);
    this.field = field;
    this.direction = direction;
  }

  readonly field: string;
  readonly direction: OrderDirection;
}
