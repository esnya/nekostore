[nekostore](../README.md) › [Globals](../globals.md) › ["Nekostore"](../modules/_nekostore_.md) › [Nekostore](_nekostore_.nekostore.md)

# Class: Nekostore

Root API interface.

## Hierarchy

* **Nekostore**

## Index

### Constructors

* [constructor](_nekostore_.nekostore.md#constructor)

### Properties

* [driver](_nekostore_.nekostore.md#driver)

### Methods

* [collection](_nekostore_.nekostore.md#collection)

## Constructors

###  constructor

\+ **new Nekostore**(`driver`: [Driver](../interfaces/_driver_.driver.md)): *[Nekostore](_nekostore_.nekostore.md)*

*Defined in [Nekostore.ts:8](https://github.com/esnya/nekostore/blob/de830f5/src/Nekostore.ts#L8)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`driver` | [Driver](../interfaces/_driver_.driver.md) | Driver instance you chosen.  |

**Returns:** *[Nekostore](_nekostore_.nekostore.md)*

## Properties

###  driver

• **driver**: *[Driver](../interfaces/_driver_.driver.md)*

*Defined in [Nekostore.ts:8](https://github.com/esnya/nekostore/blob/de830f5/src/Nekostore.ts#L8)*

## Methods

###  collection

▸ **collection**<**T**>(`id`: string): *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*

*Defined in [Nekostore.ts:20](https://github.com/esnya/nekostore/blob/de830f5/src/Nekostore.ts#L20)*

Get a reference of the collection.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*
