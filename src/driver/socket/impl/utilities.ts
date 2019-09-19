import chunk from 'lodash/chunk';
import Driver from '../../../Driver';
import CollectionReference from '../../../CollectionReference';
import NekostoreError from '../../../NekostoreError';
import QueryDescriptor from './QueryDescriptor';
import Query from '../../../Query';
import DocumentReference from '../../../DocumentReference';

export function getCollection<T>(
  driver: Driver,
  path: string,
): CollectionReference<T> {
  const paths = path.split(/\//g);
  if (paths.length % 2 !== 1) {
    throw new NekostoreError(
      'invalid-path',
      `${path} is not a path for collection`,
    );
  }
  const [root, ...others] = paths;

  return chunk(others, 2).reduce(
    (ref, [doc, col]) => ref.doc(doc).collection(col),

    driver.collection<T>(root),
  );
}

export function getQuery<T>(
  driver: Driver,
  path: string,
  descriptors: QueryDescriptor[],
): Query<T> {
  return descriptors.reduce((ref, desc) => {
    switch (desc.type) {
      case 'endAt':
      case 'endBefore':
      case 'startAfter':
      case 'startAt':
        return ref[desc.type](desc.value);
      case 'limit':
        return ref.limit(desc.limit);
      case 'orderBy':
        return ref.orderBy(desc.field, desc.direction);
      case 'where':
        return ref.where(desc.field, desc.operator, desc.value);
      default:
        throw new NekostoreError(
          'invalid-query',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          `${(desc as any).type} is not valid query`,
        );
    }
  }, driver.collection<T>(path));
}

export function getDoc<T>(driver: Driver, path: string): DocumentReference<T> {
  const paths = path.split(/\//g);
  if (paths.length % 2 !== 0) {
    throw new NekostoreError(
      'invalid-path',
      `${path} is not a path for document`,
    );
  }

  return driver
    .collection<T>(paths.slice(0, -1).join('/'))
    .doc(paths.slice(-1)[0]);
}
