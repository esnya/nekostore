import { WhereOperator, OrderDirection } from '../../Query';

interface QueryDescriptorBase<T extends string> {
  type: T;
}
export interface At<T>
  extends QueryDescriptorBase<
    'endAt' | 'endBefore' | 'startAfter' | 'startAt'
  > {
  values: T[];
}
export interface Limit extends QueryDescriptorBase<'limit'> {
  limit: number;
}
export interface OrderBy extends QueryDescriptorBase<'orderBy'> {
  field: string;
  direction?: OrderDirection;
}
export interface Where<T> extends QueryDescriptorBase<'where'> {
  field: string;
  operator: WhereOperator;
  value: T;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type QueryDescriptor = At<any> | Limit | OrderBy | Where<any>;
export default QueryDescriptor;
