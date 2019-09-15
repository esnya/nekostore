import Query, { WhereOperator } from '../../../core/Query';
import BasicQuery from '../BasicQuery';

export default class Where<T, U> extends BasicQuery<T> {
  constructor(
    id: string,
    prev: Query<T>,
    field: string,
    operator: WhereOperator,
    value: U,
  ) {
    super(id, prev);
    this.field = field;
    this.operator = operator;
    this.value = value;
  }

  readonly field: string;
  readonly operator: WhereOperator;
  readonly value: U;
}
