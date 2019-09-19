[nekostore](../README.md) › [Globals](../globals.md) › ["store/MongoStore"](../modules/_store_mongostore_.md) › [MongoStore](_store_mongostore_.mongostore.md)

# Class: MongoStore

Store implementation with MongoDB.

## Hierarchy

* **MongoStore**

## Implements

* [Store](../interfaces/_store_store_.store.md)

## Index

### Constructors

* [constructor](_store_mongostore_.mongostore.md#constructor)

### Properties

* [db](_store_mongostore_.mongostore.md#db)

### Methods

* [add](_store_mongostore_.mongostore.md#add)
* [delete](_store_mongostore_.mongostore.md#delete)
* [find](_store_mongostore_.mongostore.md#find)
* [get](_store_mongostore_.mongostore.md#get)
* [serverTimestamps](_store_mongostore_.mongostore.md#servertimestamps)
* [set](_store_mongostore_.mongostore.md#set)
* [toTimestamp](_store_mongostore_.mongostore.md#totimestamp)
* [update](_store_mongostore_.mongostore.md#update)

## Constructors

###  constructor

\+ **new MongoStore**(`options`: [Options](../interfaces/_store_mongostore_.options.md)): *[MongoStore](_store_mongostore_.mongostore.md)*

*Defined in [store/MongoStore.ts:19](https://github.com/esnya/nekostore/blob/f2443c4/src/store/MongoStore.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [Options](../interfaces/_store_mongostore_.options.md) |

**Returns:** *[MongoStore](_store_mongostore_.mongostore.md)*

## Properties

###  db

• **db**: *Db*

*Defined in [store/MongoStore.ts:24](https://github.com/esnya/nekostore/blob/f2443c4/src/store/MongoStore.ts#L24)*

## Methods

###  add

▸ **add**(`collectionId`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹string›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MongoStore.ts:46](https://github.com/esnya/nekostore/blob/f2443c4/src/store/MongoStore.ts#L46)*

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

*Defined in [store/MongoStore.ts:81](https://github.com/esnya/nekostore/blob/f2443c4/src/store/MongoStore.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |

**Returns:** *Promise‹void›*

___

###  find

▸ **find**(`collectionId`: string, `operators`: [AggregationOperator](../interfaces/_driver_basic_aggregatiooperator_.aggregationoperator.md)[]): *Promise‹object & object[]›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MongoStore.ts:30](https://github.com/esnya/nekostore/blob/f2443c4/src/store/MongoStore.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`operators` | [AggregationOperator](../interfaces/_driver_basic_aggregatiooperator_.aggregationoperator.md)[] |

**Returns:** *Promise‹object & object[]›*

___

###  get

▸ **get**(`collectionId`: string, `id`: string): *Promise‹[Data](../modules/_store_store_.md#data) | undefined›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MongoStore.ts:50](https://github.com/esnya/nekostore/blob/f2443c4/src/store/MongoStore.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |

**Returns:** *Promise‹[Data](../modules/_store_store_.md#data) | undefined›*

___

###  serverTimestamps

▸ **serverTimestamps**<**T**>(...`fields`: keyof T[]): *T*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MongoStore.ts:85](https://github.com/esnya/nekostore/blob/f2443c4/src/store/MongoStore.ts#L85)*

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

*Defined in [store/MongoStore.ts:59](https://github.com/esnya/nekostore/blob/f2443c4/src/store/MongoStore.ts#L59)*

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

*Defined in [store/MongoStore.ts:94](https://github.com/esnya/nekostore/blob/f2443c4/src/store/MongoStore.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *[Timestamp](_timestamp_.timestamp.md)*

___

###  update

▸ **update**(`collectionId`: string, `id`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹void›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MongoStore.ts:69](https://github.com/esnya/nekostore/blob/f2443c4/src/store/MongoStore.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |
`data` | [Data](../modules/_store_store_.md#data) |

**Returns:** *Promise‹void›*
