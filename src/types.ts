import DocumentReference from './DocumentReference';
import QuerySnapshot from './QuerySnapshot';
import DocumentSnapshot from './DocumentSnapshot';
import Query from './Query';

export type SnapshotOf<
  R extends DocumentReference<{}> | Query<{}>
> = R extends Query<infer T>
  ? QuerySnapshot<T>
  : (R extends DocumentReference<infer T> ? DocumentSnapshot<T> : never);

export type ReferenceOf<
  S extends DocumentSnapshot<{}> | QuerySnapshot<{}>
> = S extends QuerySnapshot<infer T>
  ? Query<T>
  : (S extends DocumentSnapshot<infer T> ? DocumentReference<T> : never);
