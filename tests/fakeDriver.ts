import { fake } from 'sinon';
import CollectionReference from '../src/core/CollectionReference';
import Driver from '../src/core/Driver';
import DocumentReference from '../src/core/DocumentReference';

export interface Data {
  foo: string;
}

export interface FakeDriver<T> extends Driver {
  fakeCollection: CollectionReference<T>;
  fakeSubCollection: CollectionReference<T>;
  fakeDocument: DocumentReference<T>;
}

export default function fakeDriver<T, U = {}>(): FakeDriver<T> {
  // eslint-disable-next-line prefer-const
  let fakeDocument: DocumentReference<T>;

  const fakeCollection: CollectionReference<T> = {
    id: 'c01',
    path: 'c01',
    doc: fake(() => fakeDocument),
  };

  const fakeSubCollection: CollectionReference<U> = {
    id: 'c02',
    path: 'c01/d01/c02',
    doc: fake(),
  };

  fakeDocument = {
    id: 'd01',
    path: 'c01/d01',
    parent: fakeCollection,
    collection: fake(() => fakeSubCollection),
  };

  return {
    getCollectionReference: fake(() => fakeCollection),
    fakeCollection,
    fakeDocument,
    fakeSubCollection,
  };
}
