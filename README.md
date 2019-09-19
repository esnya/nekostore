# Nekostore
[![npm status](http://img.shields.io/npm/v/nekostore.svg)](https://www.npmjs.org/package/nekostore)
[![Travis](https://img.shields.io/travis/esnya/nekostore)](http://travis-ci.org/esnya/nekostore)
[![Codecov](https://img.shields.io/codecov/c/github/esnya/nekostore)](https://codecov.io/gh/esnya/nekostore)
[![David](https://img.shields.io/david/esnya/nekostore)](https://david-dm.org/esnya/nekostore?type=dev)
[![David](https://img.shields.io/david/dev/esnya/nekostore)](https://david-dm.org/esnya/nekostore?type=dev)

Realtime synchronized datastore like Firestore for TypeScript.

## Usage

### Install
```bash
$ npm i -D esnya/nekostore
```

### Import
```ts
import Nekostore from 'nekostore';
import BasicDriver from 'nekostore/src/driver/basic';
```

### Create Nekostore instance
```ts
const driver: Driver = new BasicDriver();
const nekostore: Nekostore = new Nekostore(driver);
```

### Get reference
```ts
interface Data {
  foo: string;
  bar?: number;
}

interface ChildData {
  pyo: boolean;
}

const colRef: CollectionReference<Data> = nekosoter.collection<Date>('c1');
const docRef: DocumentReference<Data> = colRef.doc('d1');

const childColRef: CollectionReference<ChildData> = docRef.collection<ChildData>('child');
```

### Add document
```ts
const docRef: DocumentReference<Data> = await colRef.add({ foo: 'a', bar: 0 });
```

### Get document
```ts
const snapshot: DocumentSnapshot<Data> = await docRef.get();
if (snapshot.exists()) {
  console.log(snapshot.data, snapshot.createTime, snapshot.updateTime);
}
```

### Update document
```ts
await docRef.update({ bar: 1 });
```

### Set document
```ts
const docRef: DocumentReference<Data> = colRef.('d2');
const s1: DocumentSnapshot<Data> = await docRef.get();
console.log(s1.exists()); // false

await docRef.set({ foo: 'b' });
const s2: DocumentSnapshot<Data> = await docRef.get();
console.log(s2.exists()); // true
console.log(snapshot.data); // { foo: 'b' }
```

### Delete document
```ts
await docRef.delete();
```

### Query
```ts
function prindDocumentsData(snapshot: QuerySnashot<Data>): void {
  snapshot.docs.forEach((doc: DocumentChange<Data>): void => {
    console.log(doc.ref.id, doc.type, doc.exists(), doc.data);
  });
}

await colRef.add({ foo: 'a', bar: 0 }); // d1
await colRef.add({ foo: 'b', bar: 1 }); // d2
await colRef.add({ foo: 'c', bar: 2 }); // d3
```

### Get all documents
```ts
const snapshot: QuerySnapshot<Data> = await colRef.get();
printDocumentsData(snapshot); // random order
```

### Sort
```ts
const asc: QuerySnapshot<Data> = await colRef.orderBy('bar').get();
printDocumentsData(asc); // d1, d2, d3

const desc: QuerySnapshot<Data> = await colRef.orderBy('bar').get();
printDocumentsData(desc); // d3, d2, d1
```

## Limit
```ts
const snapshot: QuerySnapshot<Data> = await colRef.orderBy('foo').limit(2).get();
printDocumentsData(snapshot); // d1, d2
```

### EndAt EndBefore StartAfter StartAt
```ts
const s1: QuerySnapshot<Data> = await colRef.orderBy('bar').endAt(1).get();
printDocumentsData(s1); // d1, d2

const s2: QuerySnapshot<Data> = await colRef.orderBy('bar').endBefore(1).get();
printDocumentsData(s2); // d1

const s3: QuerySnapshot<Data> = await colRef.orderBy('bar').startAfter(1).get();
printDocumentsData(s3); // d3

const s4: QuerySnapshot<Data> = await colRef.orderBy('bar').startAt(1).get();
printDocumentsData(s4); // d2, d3
```

### Where
```ts
const s1: QuerySnapshot<Data> = await colRef.where('foo', '==', 'c').get();
printDocumentsData(s1); // d3

const s2: QuerySnapshot<Data> = await colRef.orderBy('bar').where('foo', '>=', 'b').get();
printDocumentsData(s2); // d2, d3

const s3: QuerySnapshot<Data> = await colRef.orderBy('bar').where('foo', '<', 'b').get();
printDocumentsData(s3); // d1
```
