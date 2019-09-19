[nekostore](../README.md) › [Globals](../globals.md) › ["Nekostore"](../modules/_nekostore_.md) › [Nekostore](_nekostore_.nekostore.md)

# Class: Nekostore

Root API interface.

**`example`** 
```ts
import Nekostore from 'nekostore';
import BasicDriver from 'nekostore/lib/driver/basic';

const driver = new BasicDriver();
const nekostore = new Nekostore(driver);

const colRef = nekostore.collection<{ foo: string }>('c1');
```

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

*Defined in [Nekostore.ts:19](https://github.com/esnya/nekostore/blob/master/src/Nekostore.ts#L19)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`driver` | [Driver](../interfaces/_driver_.driver.md) | Driver instance you chosen.  |

**Returns:** *[Nekostore](_nekostore_.nekostore.md)*

## Properties

###  driver

• **driver**: *[Driver](../interfaces/_driver_.driver.md)*

*Defined in [Nekostore.ts:19](https://github.com/esnya/nekostore/blob/master/src/Nekostore.ts#L19)*

## Methods

###  collection

▸ **collection**<**T**>(`id`: string): *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*

*Defined in [Nekostore.ts:31](https://github.com/esnya/nekostore/blob/master/src/Nekostore.ts#L31)*

Get a reference of the collection.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*
