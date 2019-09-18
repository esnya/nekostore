/* eslint prefer-const: off */
import { fake } from 'sinon';
import CollectionReference from './CollectionReference';
import Driver from './Driver';
import DocumentReference from './DocumentReference';
import DocumentSnapshot from './DocumentSnapshot';
import QuerySnapshot from './QuerySnapshot';
import Unsubscribe from './Unsubscribe';
import Query from './Query';

export interface Data {
  foo: string;
}

export interface FakeDriver<T, U> extends Driver {
  fakeCollection: CollectionReference<T>;
  fakeSubCollection: CollectionReference<U>;
  fakeDocument: DocumentReference<T>;
  fakeDocumentSnapshot: DocumentSnapshot<T>;
  fakeQuerySnapshot: QuerySnapshot<T>;
  fakeUnsubscribe: Unsubscribe;
}

export default function fakeDriver<T, U = {}>(): FakeDriver<T, U> {
  let fakeDocument: DocumentReference<T>;
  let fakeDocumentSnapshot: DocumentSnapshot<T>;
  let fakeQuerySnapshot: QuerySnapshot<T>;

  const fakeUnsubscribe = fake();

  function getFakeQuery<T>(): Query<T> {
    return {
      endAt: fake(),
      endBefore: fake(),
      limit: fake(),
      orderBy: fake(),
      startAfter: fake(),
      startAt: fake(),
      where: fake(),
      get: fake(() => Promise.resolve(fakeQuerySnapshot)),
      onSnapshot: fake(() => Promise.resolve(fakeUnsubscribe)),
    };
  }

  const fakeCollection: CollectionReference<T> = {
    ...getFakeQuery(),
    id: 'c01',
    path: 'c01',
    doc: fake(() => fakeDocument),
    add: fake(() => Promise.resolve(fakeDocument)),
  };

  const fakeSubCollection: CollectionReference<U> = {
    ...getFakeQuery(),
    id: 'c02',
    path: 'c01/d01/c02',
    doc: fake(),
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
    onSnapshot: fake(() => Promise.resolve(fakeUnsubscribe)),
  };

  fakeDocumentSnapshot = {
    ref: fakeDocument,
    exists: fake(() => false),
  };

  fakeQuerySnapshot = {
    ref: fakeCollection,
    docs: [],
  };

  return {
    collection: fake(() => fakeCollection),
    fakeCollection,
    fakeDocument,
    fakeDocumentSnapshot,
    fakeSubCollection,
    fakeQuerySnapshot,
    fakeUnsubscribe,
  };
}
