[nekostore](../README.md) › [Globals](../globals.md) › ["driver/firestore/FirestoreDriver"](../modules/_driver_firestore_firestoredriver_.md) › [FirestoreDriver](_driver_firestore_firestoredriver_.firestoredriver.md)

# Class: FirestoreDriver

Driver implementation using Firebase Firestore. Recommended!!

## Hierarchy

* **FirestoreDriver**

## Implements

* [Driver](../interfaces/_driver_.driver.md)

## Index

### Constructors

* [constructor](_driver_firestore_firestoredriver_.firestoredriver.md#constructor)

### Properties

* [firestore](_driver_firestore_firestoredriver_.firestoredriver.md#firestore)

### Methods

* [collection](_driver_firestore_firestoredriver_.firestoredriver.md#collection)

## Constructors

###  constructor

\+ **new FirestoreDriver**(`firestore`: Firestore): *[FirestoreDriver](_driver_firestore_firestoredriver_.firestoredriver.md)*

*Defined in [driver/firestore/FirestoreDriver.ts:10](https://github.com/esnya/nekostore/blob/4486881/src/driver/firestore/FirestoreDriver.ts#L10)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`firestore` | Firestore | Instance of firestore. i.e. firebase.firestore()  |

**Returns:** *[FirestoreDriver](_driver_firestore_firestoredriver_.firestoredriver.md)*

## Properties

###  firestore

• **firestore**: *Firestore*

*Defined in [driver/firestore/FirestoreDriver.ts:19](https://github.com/esnya/nekostore/blob/4486881/src/driver/firestore/FirestoreDriver.ts#L19)*

## Methods

###  collection

▸ **collection**<**T**>(`id`: string): *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*

*Implementation of [Driver](../interfaces/_driver_.driver.md)*

*Defined in [driver/firestore/FirestoreDriver.ts:21](https://github.com/esnya/nekostore/blob/4486881/src/driver/firestore/FirestoreDriver.ts#L21)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*
