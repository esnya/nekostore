/* eslint prefer-const: off */
import { fake } from 'sinon';
import CollectionReference from '../src/core/CollectionReference';
import Driver from '../src/core/Driver';
import DocumentReference from '../src/core/DocumentReference';
import DocumentSnapshot from '../src/core/DocumentSnapshot';
import QuerySnapshot from '../src/core/QuerySnapshot';

export interface Data {
  foo: string;
}

export interface FakeDriver<T, U> extends Driver {
  fakeCollection: CollectionReference<T>;
  fakeSubCollection: CollectionReference<U>;
  fakeDocument: DocumentReference<T>;
  fakeDocumentSnapshot: DocumentSnapshot<T>;
  fakeQuerySnapshot: QuerySnapshot<T>;
}

export default function fakeDriver<T, U = {}>(): FakeDriver<T, U> {
  let fakeDocument: DocumentReference<T>;
  let fakeDocumentSnapshot: DocumentSnapshot<T>;
  let fakeQuerySnapshot: QuerySnapshot<T>;

  const fakeCollection: CollectionReference<T> = {
    id: 'c01',
    path: 'c01',
    doc: fake(() => fakeDocument),
    get: fake(() => Promise.resolve(fakeQuerySnapshot)),
    add: fake(() => Promise.resolve(fakeDocument)),
  };

  const fakeSubCollection: CollectionReference<U> = {
    id: 'c02',
    path: 'c01/d01/c02',
    doc: fake(),
    get: fake(() => Promise.resolve(fakeQuerySnapshot)),
    add: fake(() => Promise.resolve(fakeDocument)),
  };

  fakeDocument = {
    id: 'd01',
    path: 'c01/d01',
    parent: fakeCollection,
    collection: fake(() => fakeSubCollection),
    get: fake(() => Promise.resolve(fakeDocumentSnapshot)),
    set: fake(() => Promise.resolve()),
    update: fake(() => Promise.resolve()),
    delete: fake(() => Promise.resolve()),
  };

  fakeDocumentSnapshot = {
    ref: fakeDocument,
    exisits: fake(() => false),
  };

  fakeQuerySnapshot = {
    ref: fakeCollection,
    docs: [],
  };

  return {
    getCollectionReference: fake(() => fakeCollection),
    fakeCollection,
    fakeDocument,
    fakeDocumentSnapshot,
    fakeSubCollection,
    fakeQuerySnapshot,
  };
}
