[nekostore](../README.md) › [Globals](../globals.md) › ["store/MemoryStore"](../modules/_store_memorystore_.md) › [MemoryStore](_store_memorystore_.memorystore.md)

# Class: MemoryStore

Non-persistent store implementation with local memory.

## Hierarchy

* **MemoryStore**

## Implements

* [Store](../interfaces/_store_store_.store.md)

## Index

### Properties

* [store](_store_memorystore_.memorystore.md#store)

### Methods

* [add](_store_memorystore_.memorystore.md#add)
* [delete](_store_memorystore_.memorystore.md#delete)
* [find](_store_memorystore_.memorystore.md#find)
* [get](_store_memorystore_.memorystore.md#get)
* [list](_store_memorystore_.memorystore.md#list)
* [serverTimestamps](_store_memorystore_.memorystore.md#servertimestamps)
* [set](_store_memorystore_.memorystore.md#set)
* [toTimestamp](_store_memorystore_.memorystore.md#totimestamp)
* [update](_store_memorystore_.memorystore.md#update)

## Properties

###  store

• **store**: *Map‹string, Map‹string, object››* =  new Map<string, Collection>()

*Defined in [store/MemoryStore.ts:16](https://github.com/esnya/nekostore/blob/4486881/src/store/MemoryStore.ts#L16)*

## Methods

###  add

▸ **add**(`collectionId`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹string›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MemoryStore.ts:45](https://github.com/esnya/nekostore/blob/4486881/src/store/MemoryStore.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`data` | [Data](../modules/_store_store_.md#data) |

**Returns:** *Promise‹string›*

___

###  delete

▸ **delete**(`collectionId`: string, `id`: string): *Promise‹void›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MemoryStore.ts:71](https://github.com/esnya/nekostore/blob/4486881/src/store/MemoryStore.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |

**Returns:** *Promise‹void›*

___

###  find

▸ **find**(`collectionId`: string, `aggregations`: [AggregationOperator](../interfaces/_driver_basic_aggregatiooperator_.aggregationoperator.md)[]): *Promise‹[DataWithId](../interfaces/_store_store_.datawithid.md)[]›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MemoryStore.ts:36](https://github.com/esnya/nekostore/blob/4486881/src/store/MemoryStore.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`aggregations` | [AggregationOperator](../interfaces/_driver_basic_aggregatiooperator_.aggregationoperator.md)[] |

**Returns:** *Promise‹[DataWithId](../interfaces/_store_store_.datawithid.md)[]›*

___

###  get

▸ **get**(`collectionId`: string, `id`: string): *Promise‹[Data](../modules/_store_store_.md#data) | undefined›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MemoryStore.ts:54](https://github.com/esnya/nekostore/blob/4486881/src/store/MemoryStore.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |

**Returns:** *Promise‹[Data](../modules/_store_store_.md#data) | undefined›*

___

###  list

▸ **list**(`collectionId`: string): *Promise‹[DataWithId](../interfaces/_store_store_.datawithid.md)[]›*

*Defined in [store/MemoryStore.ts:28](https://github.com/esnya/nekostore/blob/4486881/src/store/MemoryStore.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |

**Returns:** *Promise‹[DataWithId](../interfaces/_store_store_.datawithid.md)[]›*

___

###  serverTimestamps

▸ **serverTimestamps**<**T**>(...`fields`: keyof T[]): *T*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MemoryStore.ts:75](https://github.com/esnya/nekostore/blob/4486881/src/store/MemoryStore.ts#L75)*

**Type parameters:**

▪ **T**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`...fields` | keyof T[] |

**Returns:** *T*

___

###  set

▸ **set**(`collectionId`: string, `id`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹void›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MemoryStore.ts:59](https://github.com/esnya/nekostore/blob/4486881/src/store/MemoryStore.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |
`data` | [Data](../modules/_store_store_.md#data) |

**Returns:** *Promise‹void›*

___

###  toTimestamp

▸ **toTimestamp**(`value`: any): *[Timestamp](_timestamp_.timestamp.md)*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MemoryStore.ts:81](https://github.com/esnya/nekostore/blob/4486881/src/store/MemoryStore.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *[Timestamp](_timestamp_.timestamp.md)*

___

###  update

▸ **update**(`collectionId`: string, `id`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹void›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MemoryStore.ts:63](https://github.com/esnya/nekostore/blob/4486881/src/store/MemoryStore.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |
`data` | [Data](../modules/_store_store_.md#data) |

**Returns:** *Promise‹void›*
