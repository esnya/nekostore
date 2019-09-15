/* eslint prefer-const: off */
import { fake } from 'sinon';
import CollectionReference from '../src/core/CollectionReference';
import Driver from '../src/core/Driver';
import DocumentReference from '../src/core/DocumentReference';
import DocumentSnapshot from '../src/core/DocumentSnapshot';
import QuerySnapshot from '../src/core/QuerySnapshot';
import Unsubscribe from '../src/core/Unsubscribe';
import Query from '../src/core/Query';

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
      onSnapshot: fake(() => fakeUnsubscribe),
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
    onSnapshot: fake(() => fakeUnsubscribe),
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
    getCollectionReference: fake(() => fakeCollection),
    fakeCollection,
    fakeDocument,
    fakeDocumentSnapshot,
    fakeSubCollection,
    fakeQuerySnapshot,
    fakeUnsubscribe,
  };
}
