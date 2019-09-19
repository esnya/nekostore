[nekostore](../README.md) › [Globals](../globals.md) › ["CollectionReference"](../modules/_collectionreference_.md) › [CollectionReference](_collectionreference_.collectionreference.md)

# Interface: CollectionReference <**T**>

Reference for the collection.

## Type parameters

▪ **T**

## Hierarchy

* [Query](_query_.query.md)‹T›

  ↳ **CollectionReference**

## Index

### Properties

* [id](_collectionreference_.collectionreference.md#id)
* [path](_collectionreference_.collectionreference.md#path)

### Methods

* [add](_collectionreference_.collectionreference.md#add)
* [doc](_collectionreference_.collectionreference.md#doc)
* [endAt](_collectionreference_.collectionreference.md#endat)
* [endBefore](_collectionreference_.collectionreference.md#endbefore)
* [get](_collectionreference_.collectionreference.md#get)
* [limit](_collectionreference_.collectionreference.md#limit)
* [onSnapshot](_collectionreference_.collectionreference.md#onsnapshot)
* [orderBy](_collectionreference_.collectionreference.md#orderby)
* [startAfter](_collectionreference_.collectionreference.md#startafter)
* [startAt](_collectionreference_.collectionreference.md#startat)
* [where](_collectionreference_.collectionreference.md#where)

## Properties

###  id

• **id**: *string*

*Defined in [CollectionReference.ts:11](https://github.com/esnya/nekostore/blob/99eadde/src/CollectionReference.ts#L11)*

ID of the collection.

___

###  path

• **path**: *string*

*Defined in [CollectionReference.ts:16](https://github.com/esnya/nekostore/blob/99eadde/src/CollectionReference.ts#L16)*

Path from the route separated by "/".

## Methods

###  add

▸ **add**(`data`: T): *Promise‹[DocumentReference](_documentreference_.documentreference.md)‹T››*

*Defined in [CollectionReference.ts:39](https://github.com/esnya/nekostore/blob/99eadde/src/CollectionReference.ts#L39)*

Add a new document.

**`example`** 
```ts
const data: T = { ...data };
const docRef: DocumentReference<T> = await collRef.add(data);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | T | Data of new document. |

**Returns:** *Promise‹[DocumentReference](_documentreference_.documentreference.md)‹T››*

Reference for the added document.

___

###  doc

▸ **doc**(`id`: string): *[DocumentReference](_documentreference_.documentreference.md)‹T›*

*Defined in [CollectionReference.ts:26](https://github.com/esnya/nekostore/blob/99eadde/src/CollectionReference.ts#L26)*

Get a reference for the document.

**`example`** 
```ts
const docRef: DocumentReference<T> = colRef.doc('id');
```

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[DocumentReference](_documentreference_.documentreference.md)‹T›*

___

###  endAt

▸ **endAt**<**U**>(`value`: U): *[Query](_query_.query.md)‹T›*

*Inherited from [Query](_query_.query.md).[endAt](_query_.query.md#endat)*

*Defined in [Query.ts:32](https://github.com/esnya/nekostore/blob/99eadde/src/Query.ts#L32)*

Specify end poisiton by field value. Use after orderBy.

**`example`** 
```ts
const snapshot = await colRef.orderBy('foo.bar', 'desc').endAt('c').get();
```

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | U | Value of field specified wity orderBy.  |

**Returns:** *[Query](_query_.query.md)‹T›*

___

###  endBefore

▸ **endBefore**<**U**>(`value`: U): *[Query](_query_.query.md)‹T›*

*Inherited from [Query](_query_.query.md).[endBefore](_query_.query.md#endbefore)*

*Defined in [Query.ts:43](https://github.com/esnya/nekostore/blob/99eadde/src/Query.ts#L43)*

Specify end poisiton by field value. Use after orderBy.

**`example`** 
```ts
const snapshot = await colRef.orderBy('foo.bar', 'desc').endBefore('c').get();
```

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | U | Value of field specified wity orderBy.  |

**Returns:** *[Query](_query_.query.md)‹T›*

___

###  get

▸ **get**(): *Promise‹[QuerySnapshot](_querysnapshot_.querysnapshot.md)‹T››*

*Inherited from [Query](_query_.query.md).[get](_query_.query.md#get)*

*Defined in [Query.ts:100](https://github.com/esnya/nekostore/blob/99eadde/src/Query.ts#L100)*

Get a snapshot of the query.

**`example`** 
```ts
const snapshot = await query.get();
console.log(snapshot.docs.map(doc: DocumentChange<T> => doc.data));
```

**Returns:** *Promise‹[QuerySnapshot](_querysnapshot_.querysnapshot.md)‹T››*

___

###  limit

▸ **limit**(`limit`: number): *[Query](_query_.query.md)‹T›*

*Inherited from [Query](_query_.query.md).[limit](_query_.query.md#limit)*

*Defined in [Query.ts:76](https://github.com/esnya/nekostore/blob/99eadde/src/Query.ts#L76)*

Limit number of documents.

**`example`** 
```ts
const snapshot = await colRef.limit(2).get();
assert(snapshot.docs.length <= 2);
```

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *[Query](_query_.query.md)‹T›*

___

###  onSnapshot

▸ **onSnapshot**(`onNext`: function): *Promise‹Unsubscribe›*

*Inherited from [Query](_query_.query.md).[onSnapshot](_query_.query.md#onsnapshot)*

*Defined in [Query.ts:122](https://github.com/esnya/nekostore/blob/99eadde/src/Query.ts#L122)*

Receive snapshots of the query when updated.

**`example`** 
```ts
let unsubscribe: Unsubscribe;

async function onInit(): Promise<void> {
  unsubscribe = await query.onSnapshot(snapshot => {
    updateView(snapshot.docs);
  });
}

async function onDestroy(): Promise<void> {
  await unsubscribe();
}
```

**Parameters:**

▪ **onNext**: *function*

▸ (`snapshot`: [QuerySnapshot](_querysnapshot_.querysnapshot.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`snapshot` | [QuerySnapshot](_querysnapshot_.querysnapshot.md)‹T› |

**Returns:** *Promise‹Unsubscribe›*

Function to unsubscribe.

___

###  orderBy

▸ **orderBy**(`field`: string, `direction?`: [OrderDirection](../modules/_query_.md#orderdirection)): *[Query](_query_.query.md)‹T›*

*Inherited from [Query](_query_.query.md).[orderBy](_query_.query.md#orderby)*

*Defined in [Query.ts:21](https://github.com/esnya/nekostore/blob/99eadde/src/Query.ts#L21)*

Sort documents.

**`example`** 
```ts
const snapshot = await colRef.orderBy('foo.bar', 'desc').get();
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`field` | string | Path for the field seperated by '.'. |
`direction?` | [OrderDirection](../modules/_query_.md#orderdirection) | Order direction e.g. 'asc', 'desc'.  |

**Returns:** *[Query](_query_.query.md)‹T›*

___

###  startAfter

▸ **startAfter**<**U**>(`value`: U): *[Query](_query_.query.md)‹T›*

*Inherited from [Query](_query_.query.md).[startAfter](_query_.query.md#startafter)*

*Defined in [Query.ts:54](https://github.com/esnya/nekostore/blob/99eadde/src/Query.ts#L54)*

Specify start poisiton by field value. Use after orderBy.

**`example`** 
```ts
const snapshot = await colRef.orderBy('foo.bar', 'desc').startAfter('c').get();
```

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | U | Value of field specified wity orderBy.  |

**Returns:** *[Query](_query_.query.md)‹T›*

___

###  startAt

▸ **startAt**<**U**>(`value`: U): *[Query](_query_.query.md)‹T›*

*Inherited from [Query](_query_.query.md).[startAt](_query_.query.md#startat)*

*Defined in [Query.ts:65](https://github.com/esnya/nekostore/blob/99eadde/src/Query.ts#L65)*

Specify start poisiton by field value. Use after orderBy.

**`example`** 
```ts
const snapshot = await colRef.orderBy('foo.bar', 'desc').startAt('c').get();
```

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | U | Value of field specified wity orderBy.  |

**Returns:** *[Query](_query_.query.md)‹T›*

___

###  where

▸ **where**<**U**>(`field`: string, `operator`: [WhereOperator](../modules/_query_.md#whereoperator), `value`: U): *[Query](_query_.query.md)‹T›*

*Inherited from [Query](_query_.query.md).[where](_query_.query.md#where)*

*Defined in [Query.ts:89](https://github.com/esnya/nekostore/blob/99eadde/src/Query.ts#L89)*

Filter documents by specified operator.

**`example`** 
```ts
const snapshot = await colRef.where('foo.bar', '>=', 2).get();
```

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`field` | string | Path for the field separated by '.'. |
`operator` | [WhereOperator](../modules/_query_.md#whereoperator) | Operator for compararison e.g. '==', '<', '<=', '>', '>=' |
`value` | U | Rvalue for comparison.  |

**Returns:** *[Query](_query_.query.md)‹T›*
