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
* [serverTimestamps](_store_store_.store.md#servertimestamps)
* [set](_store_store_.store.md#set)
* [toTimestamp](_store_store_.store.md#totimestamp)
* [update](_store_store_.store.md#update)

## Methods

###  add

▸ **add**(`collectionId`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹string›*

*Defined in [store/Store.ts:31](https://github.com/esnya/nekostore/blob/master/src/store/Store.ts#L31)*

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

*Defined in [store/Store.ts:62](https://github.com/esnya/nekostore/blob/master/src/store/Store.ts#L62)*

Delete a document.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collectionId` | string | - |
`id` | string |   |

**Returns:** *Promise‹void›*

___

###  find

▸ **find**(`collectionId`: string, `operators`: [AggregationOperator](_driver_basic_aggregatiooperator_.aggregationoperator.md)[]): *Promise‹[DataWithId](_store_store_.datawithid.md)[]›*

*Defined in [store/Store.ts:20](https://github.com/esnya/nekostore/blob/master/src/store/Store.ts#L20)*

Aggregate

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collectionId` | string | - |
`operators` | [AggregationOperator](_driver_basic_aggregatiooperator_.aggregationoperator.md)[] | Array of aggregation operators like MongoDB.  |

**Returns:** *Promise‹[DataWithId](_store_store_.datawithid.md)[]›*

___

###  get

▸ **get**(`collectionId`: string, `id`: string): *Promise‹[Data](../modules/_store_store_.md#data) | undefined›*

*Defined in [store/Store.ts:39](https://github.com/esnya/nekostore/blob/master/src/store/Store.ts#L39)*

Get a document.

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |

**Returns:** *Promise‹[Data](../modules/_store_store_.md#data) | undefined›*

Document data if exists, undefined otherwise

___

###  serverTimestamps

▸ **serverTimestamps**<**T**>(...`fields`: keyof T[]): *T*

*Defined in [store/Store.ts:68](https://github.com/esnya/nekostore/blob/master/src/store/Store.ts#L68)*

Makes bject with the specified field that is the timestamp value on the server.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...fields` | keyof T[] | .e.g. 'createTime', 'updateTime'  |

**Returns:** *T*

___

###  set

▸ **set**(`collectionId`: string, `id`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹void›*

*Defined in [store/Store.ts:47](https://github.com/esnya/nekostore/blob/master/src/store/Store.ts#L47)*

Set data a document.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collectionId` | string | - |
`id` | string | - |
`data` | [Data](../modules/_store_store_.md#data) |   |

**Returns:** *Promise‹void›*

___

###  toTimestamp

▸ **toTimestamp**(`value`: any): *[Timestamp](../classes/_timestamp_.timestamp.md)*

*Defined in [store/Store.ts:75](https://github.com/esnya/nekostore/blob/master/src/store/Store.ts#L75)*

Converts the store internal timestamp into a Timestamp.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | Store internal timestamp.  |

**Returns:** *[Timestamp](../classes/_timestamp_.timestamp.md)*

___

###  update

▸ **update**(`collectionId`: string, `id`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹void›*

*Defined in [store/Store.ts:55](https://github.com/esnya/nekostore/blob/master/src/store/Store.ts#L55)*

Update a document and merge deeply.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collectionId` | string | - |
`id` | string | - |
`data` | [Data](../modules/_store_store_.md#data) |   |

**Returns:** *Promise‹void›*
