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
* [set](_store_memorystore_.memorystore.md#set)
* [update](_store_memorystore_.memorystore.md#update)

## Properties

###  store

• **store**: *Map‹string, Map‹string, object››* =  new Map<string, Collection>()

*Defined in [store/MemoryStore.ts:14](https://github.com/esnya/nekostore/blob/master/src/store/MemoryStore.ts#L14)*

## Methods

###  add

▸ **add**(`collectionId`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹string›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MemoryStore.ts:43](https://github.com/esnya/nekostore/blob/master/src/store/MemoryStore.ts#L43)*

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

*Defined in [store/MemoryStore.ts:69](https://github.com/esnya/nekostore/blob/master/src/store/MemoryStore.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |

**Returns:** *Promise‹void›*

___

###  find

▸ **find**(`collectionId`: string, `aggregations`: [AggregationOperator](../interfaces/_aggregationoperator_.aggregationoperator.md)[]): *Promise‹[DataWithId](../interfaces/_store_store_.datawithid.md)[]›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MemoryStore.ts:34](https://github.com/esnya/nekostore/blob/master/src/store/MemoryStore.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`aggregations` | [AggregationOperator](../interfaces/_aggregationoperator_.aggregationoperator.md)[] |

**Returns:** *Promise‹[DataWithId](../interfaces/_store_store_.datawithid.md)[]›*

___

###  get

▸ **get**(`collectionId`: string, `id`: string): *Promise‹[Data](../modules/_store_store_.md#data) | undefined›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MemoryStore.ts:52](https://github.com/esnya/nekostore/blob/master/src/store/MemoryStore.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |

**Returns:** *Promise‹[Data](../modules/_store_store_.md#data) | undefined›*

___

###  list

▸ **list**(`collectionId`: string): *Promise‹[DataWithId](../interfaces/_store_store_.datawithid.md)[]›*

*Defined in [store/MemoryStore.ts:26](https://github.com/esnya/nekostore/blob/master/src/store/MemoryStore.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |

**Returns:** *Promise‹[DataWithId](../interfaces/_store_store_.datawithid.md)[]›*

___

###  set

▸ **set**(`collectionId`: string, `id`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹void›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MemoryStore.ts:57](https://github.com/esnya/nekostore/blob/master/src/store/MemoryStore.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |
`data` | [Data](../modules/_store_store_.md#data) |

**Returns:** *Promise‹void›*

___

###  update

▸ **update**(`collectionId`: string, `id`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹void›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MemoryStore.ts:61](https://github.com/esnya/nekostore/blob/master/src/store/MemoryStore.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |
`data` | [Data](../modules/_store_store_.md#data) |

**Returns:** *Promise‹void›*
