import Query from './Query';
import QueryDocumentSnapshot from './QueryDocumentSnapshot';

export default abstract class QuerySnapshot<T> {
  constructor(
    readonly query: Query<T>,
    readonly docs: QueryDocumentSnapshot<T>[],
  ) {}
}
