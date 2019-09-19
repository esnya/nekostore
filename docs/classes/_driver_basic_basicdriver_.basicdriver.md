[nekostore](../README.md) › [Globals](../globals.md) › ["driver/basic/BasicDriver"](../modules/_driver_basic_basicdriver_.md) › [BasicDriver](_driver_basic_basicdriver_.basicdriver.md)

# Class: BasicDriver

Driver implemtation using a simple store and event emitter.

## Hierarchy

* **BasicDriver**

## Implements

* [Driver](../interfaces/_driver_.driver.md)

## Index

### Constructors

* [constructor](_driver_basic_basicdriver_.basicdriver.md#constructor)

### Properties

* [eventEmitter](_driver_basic_basicdriver_.basicdriver.md#eventemitter)
* [store](_driver_basic_basicdriver_.basicdriver.md#store)

### Methods

* [collection](_driver_basic_basicdriver_.basicdriver.md#collection)

## Constructors

###  constructor

\+ **new BasicDriver**(`options`: [Options](../interfaces/_driver_basic_basicdriver_.options.md)): *[BasicDriver](_driver_basic_basicdriver_.basicdriver.md)*

*Defined in [driver/basic/BasicDriver.ts:17](https://github.com/esnya/nekostore/blob/99eadde/src/driver/basic/BasicDriver.ts#L17)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [Options](../interfaces/_driver_basic_basicdriver_.options.md) |  {} |

**Returns:** *[BasicDriver](_driver_basic_basicdriver_.basicdriver.md)*

## Properties

###  eventEmitter

• **eventEmitter**: *[EventEmitter](../interfaces/_driver_basic_eventemitter_.eventemitter.md)*

*Defined in [driver/basic/BasicDriver.ts:24](https://github.com/esnya/nekostore/blob/99eadde/src/driver/basic/BasicDriver.ts#L24)*

___

###  store

• **store**: *[Store](../interfaces/_store_store_.store.md)*

*Defined in [driver/basic/BasicDriver.ts:23](https://github.com/esnya/nekostore/blob/99eadde/src/driver/basic/BasicDriver.ts#L23)*

## Methods

###  collection

▸ **collection**<**T**>(`id`: string): *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*

*Implementation of [Driver](../interfaces/_driver_.driver.md)*

*Defined in [driver/basic/BasicDriver.ts:26](https://github.com/esnya/nekostore/blob/99eadde/src/driver/basic/BasicDriver.ts#L26)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*
