[nekostore](../README.md) › [Globals](../globals.md) › ["Driver"](../modules/_driver_.md) › [Driver](_driver_.driver.md)

# Interface: Driver

Interface for driver implementation.

## Hierarchy

* **Driver**

## Implemented by

* [BasicDriver](../classes/_driver_basic_basicdriver_.basicdriver.md)
* [FirestoreDriver](../classes/_driver_firestore_firestoredriver_.firestoredriver.md)
* [SocketDriver](../classes/_driver_socket_socketdriver_.socketdriver.md)

## Index

### Methods

* [collection](_driver_.driver.md#collection)

## Methods

###  collection

▸ **collection**<**T**>(`id`: string): *[CollectionReference](_collectionreference_.collectionreference.md)‹T›*

*Defined in [Driver.ts:11](https://github.com/esnya/nekostore/blob/4486881/src/Driver.ts#L11)*

Collection reference getter.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string |   |

**Returns:** *[CollectionReference](_collectionreference_.collectionreference.md)‹T›*
