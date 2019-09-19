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

*Defined in [CollectionReference.ts:11](https://github.com/esnya/nekostore/blob/4486881/src/CollectionReference.ts#L11)*

ID of the collection.

___

###  path

• **path**: *string*

*Defined in [CollectionReference.ts:16](https://github.com/esnya/nekostore/blob/4486881/src/CollectionReference.ts#L16)*

Path from the route separated by "/"

## Methods

###  add

▸ **add**(`data`: T): *Promise‹[DocumentReference](_documentreference_.documentreference.md)‹T››*

*Defined in [CollectionReference.ts:28](https://github.com/esnya/nekostore/blob/4486881/src/CollectionReference.ts#L28)*

Add a new document.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | T | Data of new document. |

**Returns:** *Promise‹[DocumentReference](_documentreference_.documentreference.md)‹T››*

Reference for the added document.

___

###  doc

▸ **doc**(`id`: string): *[DocumentReference](_documentreference_.documentreference.md)‹T›*

*Defined in [CollectionReference.ts:21](https://github.com/esnya/nekostore/blob/4486881/src/CollectionReference.ts#L21)*

Get a reference for the document.

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[DocumentReference](_documentreference_.documentreference.md)‹T›*

___

###  endAt

▸ **endAt**<**U**>(`value`: U): *[Query](_query_.query.md)‹T›*

*Inherited from [Query](_query_.query.md).[endAt](_query_.query.md#endat)*

*Defined in [Query.ts:22](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L22)*

Specify end poisiton by field value. Use after orderBy.

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

*Defined in [Query.ts:28](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L28)*

Specify end poisiton by field value. Use after orderBy.

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

*Defined in [Query.ts:58](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L58)*

Get a snapshot of the query.

**Returns:** *Promise‹[QuerySnapshot](_querysnapshot_.querysnapshot.md)‹T››*

___

###  limit

▸ **limit**(`limit`: number): *[Query](_query_.query.md)‹T›*

*Inherited from [Query](_query_.query.md).[limit](_query_.query.md#limit)*

*Defined in [Query.ts:45](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L45)*

Limit number of documents.

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *[Query](_query_.query.md)‹T›*

___

###  onSnapshot

▸ **onSnapshot**(`onNext`: function): *Promise‹Unsubscribe›*

*Inherited from [Query](_query_.query.md).[onSnapshot](_query_.query.md#onsnapshot)*

*Defined in [Query.ts:65](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L65)*

Receive snapshots of the query when updated.

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

*Defined in [Query.ts:16](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L16)*

Sort documents.

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

*Defined in [Query.ts:34](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L34)*

Specify start poisiton by field value. Use after orderBy.

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

*Defined in [Query.ts:40](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L40)*

Specify start poisiton by field value. Use after orderBy.

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

*Defined in [Query.ts:53](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L53)*

Filter documents by specified operator.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`field` | string | Path for the field separated by '.'. |
`operator` | [WhereOperator](../modules/_query_.md#whereoperator) | Operator for compararison e.g. '==', '<', '<=', '>', '>=' |
`value` | U | Rvalue for comparison.  |

**Returns:** *[Query](_query_.query.md)‹T›*
