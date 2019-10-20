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
* [set](_store_mongostore_.mongostore.md#set)
* [update](_store_mongostore_.mongostore.md#update)

## Constructors

###  constructor

\+ **new MongoStore**(`options`: [Options](../interfaces/_store_mongostore_.options.md)): *[MongoStore](_store_mongostore_.mongostore.md)*

*Defined in [store/MongoStore.ts:29](https://github.com/esnya/nekostore/blob/master/src/store/MongoStore.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [Options](../interfaces/_store_mongostore_.options.md) |

**Returns:** *[MongoStore](_store_mongostore_.mongostore.md)*

## Properties

###  db

• **db**: *Db*

*Defined in [store/MongoStore.ts:34](https://github.com/esnya/nekostore/blob/master/src/store/MongoStore.ts#L34)*

## Methods

###  add

▸ **add**(`collectionId`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹string›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MongoStore.ts:56](https://github.com/esnya/nekostore/blob/master/src/store/MongoStore.ts#L56)*

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

*Defined in [store/MongoStore.ts:85](https://github.com/esnya/nekostore/blob/master/src/store/MongoStore.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |

**Returns:** *Promise‹void›*

___

###  find

▸ **find**(`collectionId`: string, `operators`: [AggregationOperator](../interfaces/_aggregationoperator_.aggregationoperator.md)[]): *Promise‹object & object[]›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MongoStore.ts:40](https://github.com/esnya/nekostore/blob/master/src/store/MongoStore.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`operators` | [AggregationOperator](../interfaces/_aggregationoperator_.aggregationoperator.md)[] |

**Returns:** *Promise‹object & object[]›*

___

###  get

▸ **get**(`collectionId`: string, `id`: string): *Promise‹[Data](../modules/_store_store_.md#data) | undefined›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MongoStore.ts:60](https://github.com/esnya/nekostore/blob/master/src/store/MongoStore.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |

**Returns:** *Promise‹[Data](../modules/_store_store_.md#data) | undefined›*

___

###  set

▸ **set**(`collectionId`: string, `id`: string, `data`: [Data](../modules/_store_store_.md#data)): *Promise‹void›*

*Implementation of [Store](../interfaces/_store_store_.store.md)*

*Defined in [store/MongoStore.ts:67](https://github.com/esnya/nekostore/blob/master/src/store/MongoStore.ts#L67)*

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

*Defined in [store/MongoStore.ts:75](https://github.com/esnya/nekostore/blob/master/src/store/MongoStore.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionId` | string |
`id` | string |
`data` | [Data](../modules/_store_store_.md#data) |

**Returns:** *Promise‹void›*
