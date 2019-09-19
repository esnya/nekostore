[nekostore](../README.md) › [Globals](../globals.md) › ["Query"](../modules/_query_.md) › [Query](_query_.query.md)

# Interface: Query <**T**>

Query of the collection reference.

## Type parameters

▪ **T**

## Hierarchy

* **Query**

  ↳ [CollectionReference](_collectionreference_.collectionreference.md)

## Index

### Methods

* [endAt](_query_.query.md#endat)
* [endBefore](_query_.query.md#endbefore)
* [get](_query_.query.md#get)
* [limit](_query_.query.md#limit)
* [onSnapshot](_query_.query.md#onsnapshot)
* [orderBy](_query_.query.md#orderby)
* [startAfter](_query_.query.md#startafter)
* [startAt](_query_.query.md#startat)
* [where](_query_.query.md#where)

## Methods

###  endAt

▸ **endAt**<**U**>(`value`: U): *[Query](_query_.query.md)‹T›*

*Defined in [Query.ts:32](https://github.com/esnya/nekostore/blob/f2443c4/src/Query.ts#L32)*

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

*Defined in [Query.ts:43](https://github.com/esnya/nekostore/blob/f2443c4/src/Query.ts#L43)*

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

*Defined in [Query.ts:100](https://github.com/esnya/nekostore/blob/f2443c4/src/Query.ts#L100)*

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

*Defined in [Query.ts:76](https://github.com/esnya/nekostore/blob/f2443c4/src/Query.ts#L76)*

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

*Defined in [Query.ts:122](https://github.com/esnya/nekostore/blob/f2443c4/src/Query.ts#L122)*

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

*Defined in [Query.ts:21](https://github.com/esnya/nekostore/blob/f2443c4/src/Query.ts#L21)*

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

*Defined in [Query.ts:54](https://github.com/esnya/nekostore/blob/f2443c4/src/Query.ts#L54)*

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

*Defined in [Query.ts:65](https://github.com/esnya/nekostore/blob/f2443c4/src/Query.ts#L65)*

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

*Defined in [Query.ts:89](https://github.com/esnya/nekostore/blob/f2443c4/src/Query.ts#L89)*

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
