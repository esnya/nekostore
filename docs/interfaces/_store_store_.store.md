[nekostore](../README.md) › [Globals](../globals.md) › ["store/Store"](../modules/_store_store_.md) › [Store](_store_store_.store.md)

# Interface: Store

Interface for data store implementation.

## Hierarchy

* **Store**

## Implemented by

* [MemoryStore](../classes/_store_memorystore_.memorystore.md)
* [MongoStore](../classes/_store_mongostore_.mongostore.md)

## Index

### Methods

* [add](_store_store_.store.md#add)
* [delete](_store_store_.store.md#delete)
* [find](_store_store_.store.md#find)
* [get](_store_store_.store.md#get)
* [set](_store_store_.store.md#set)
* [update](_store_store_.store.md#update)

## Methods

###  add

▸ **add**(`collectionId`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹string›*

*Defined in [store/Store.ts:30](https://github.com/esnya/nekostore/blob/master/src/store/Store.ts#L30)*

Add a new document.

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`data` | [Data](../modules/_store_store_.md#data) |

**Returns:** *Promise‹string›*

ID of added document.

___

###  delete

▸ **delete**(`collectionId`: string, `id`: string): *Promise‹void›*

*Defined in [store/Store.ts:61](https://github.com/esnya/nekostore/blob/master/src/store/Store.ts#L61)*

Delete a document.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collectionId` | string | - |
`id` | string |   |

**Returns:** *Promise‹void›*

___

###  find

▸ **find**(`collectionId`: string, `operators`: [AggregationOperator](_aggregationoperator_.aggregationoperator.md)[]): *Promise‹[DataWithId](_store_store_.datawithid.md)[]›*

*Defined in [store/Store.ts:19](https://github.com/esnya/nekostore/blob/master/src/store/Store.ts#L19)*

Aggregate

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collectionId` | string | - |
`operators` | [AggregationOperator](_aggregationoperator_.aggregationoperator.md)[] | Array of aggregation operators like MongoDB.  |

**Returns:** *Promise‹[DataWithId](_store_store_.datawithid.md)[]›*

___

###  get

▸ **get**(`collectionId`: string, `id`: string): *Promise‹[Data](../modules/_store_store_.md#data) | undefined›*

*Defined in [store/Store.ts:38](https://github.com/esnya/nekostore/blob/master/src/store/Store.ts#L38)*

Get a document.

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |

**Returns:** *Promise‹[Data](../modules/_store_store_.md#data) | undefined›*

Document data if exists, undefined otherwise

___

###  set

▸ **set**(`collectionId`: string, `id`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹void›*

*Defined in [store/Store.ts:46](https://github.com/esnya/nekostore/blob/master/src/store/Store.ts#L46)*

Set data a document.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collectionId` | string | - |
`id` | string | - |
`data` | [Data](../modules/_store_store_.md#data) |   |

**Returns:** *Promise‹void›*

___

###  update

▸ **update**(`collectionId`: string, `id`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹void›*

*Defined in [store/Store.ts:54](https://github.com/esnya/nekostore/blob/master/src/store/Store.ts#L54)*

Update a document and merge deeply.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collectionId` | string | - |
`id` | string | - |
`data` | [Data](../modules/_store_store_.md#data) |   |

**Returns:** *Promise‹void›*
