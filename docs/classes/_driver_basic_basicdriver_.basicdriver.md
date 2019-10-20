[nekostore](../README.md) › [Globals](../globals.md) › ["driver/basic/BasicDriver"](../modules/_driver_basic_basicdriver_.md) › [BasicDriver](_driver_basic_basicdriver_.basicdriver.md)

# Class: BasicDriver

Driver implementation using a simple store and event emitter.

## Hierarchy

* **BasicDriver**

## Implements

* [Driver](../interfaces/_driver_.driver.md)

## Index

### Constructors

* [constructor](_driver_basic_basicdriver_.basicdriver.md#constructor)

### Properties

* [eventEmitter](_driver_basic_basicdriver_.basicdriver.md#eventemitter)
* [rules](_driver_basic_basicdriver_.basicdriver.md#rules)
* [store](_driver_basic_basicdriver_.basicdriver.md#store)
* [user](_driver_basic_basicdriver_.basicdriver.md#user)

### Methods

* [authorize](_driver_basic_basicdriver_.basicdriver.md#authorize)
* [collection](_driver_basic_basicdriver_.basicdriver.md#collection)

## Constructors

###  constructor

\+ **new BasicDriver**(`options`: [Options](../interfaces/_driver_basic_basicdriver_.options.md)): *[BasicDriver](_driver_basic_basicdriver_.basicdriver.md)*

*Defined in [driver/basic/BasicDriver.ts:55](https://github.com/esnya/nekostore/blob/master/src/driver/basic/BasicDriver.ts#L55)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [Options](../interfaces/_driver_basic_basicdriver_.options.md) |  {} |

**Returns:** *[BasicDriver](_driver_basic_basicdriver_.basicdriver.md)*

## Properties

###  eventEmitter

• **eventEmitter**: *[EventEmitter](../interfaces/_driver_basic_eventemitter_.eventemitter.md)*

*Defined in [driver/basic/BasicDriver.ts:68](https://github.com/esnya/nekostore/blob/master/src/driver/basic/BasicDriver.ts#L68)*

___

###  rules

• **rules**: *[CompiledSecurityRuleMatcher](../interfaces/_driver_basic_basicdriver_.compiledsecurityrulematcher.md)[]*

*Defined in [driver/basic/BasicDriver.ts:69](https://github.com/esnya/nekostore/blob/master/src/driver/basic/BasicDriver.ts#L69)*

___

###  store

• **store**: *[Store](../interfaces/_store_store_.store.md)*

*Defined in [driver/basic/BasicDriver.ts:67](https://github.com/esnya/nekostore/blob/master/src/driver/basic/BasicDriver.ts#L67)*

___

###  user

• **user**: *[User](../interfaces/_driver_basic_securityrule_.user.md) | null*

*Defined in [driver/basic/BasicDriver.ts:71](https://github.com/esnya/nekostore/blob/master/src/driver/basic/BasicDriver.ts#L71)*

## Methods

###  authorize

▸ **authorize**(`path`: string, `action`: "read" | "write"): *void*

*Defined in [driver/basic/BasicDriver.ts:77](https://github.com/esnya/nekostore/blob/master/src/driver/basic/BasicDriver.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`action` | "read" &#124; "write" |

**Returns:** *void*

___

###  collection

▸ **collection**<**T**>(`id`: string): *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*

*Implementation of [Driver](../interfaces/_driver_.driver.md)*

*Defined in [driver/basic/BasicDriver.ts:73](https://github.com/esnya/nekostore/blob/master/src/driver/basic/BasicDriver.ts#L73)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*
