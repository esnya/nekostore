[nekostore](../README.md) › [Globals](../globals.md) › ["driver/firestore/FirestoreDocumentSnapshot"](../modules/_driver_firestore_firestoredocumentsnapshot_.md) › [FirestoreDocumentSnapsnot](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md)

# Class: FirestoreDocumentSnapsnot <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **FirestoreDocumentSnapsnot**

  ↳ [FirestoreDocumentChange](_driver_firestore_firestoredocumedntchange_.firestoredocumentchange.md)

## Implements

* [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T›

## Index

### Constructors

* [constructor](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md#constructor)

### Properties

* [createTime](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md#optional-createtime)
* [data](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md#optional-data)
* [ref](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md#ref)
* [updateTime](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md#optional-updatetime)

### Methods

* [exists](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md#exists)

## Constructors

###  constructor

\+ **new FirestoreDocumentSnapsnot**(`snapshot`: DocumentSnapshot): *[FirestoreDocumentSnapsnot](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md)*

*Defined in [driver/firestore/FirestoreDocumentSnapshot.ts:7](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentSnapshot.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`snapshot` | DocumentSnapshot |

**Returns:** *[FirestoreDocumentSnapsnot](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md)*

## Properties

### `Optional` createTime

• **createTime**? : *[Timestamp](_timestamp_.timestamp.md)*

*Implementation of [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md).[createTime](../interfaces/_documentsnapshot_.documentsnapshot.md#optional-createtime)*

*Defined in [driver/firestore/FirestoreDocumentSnapshot.ts:22](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentSnapshot.ts#L22)*

___

### `Optional` data

• **data**? : *T*

*Implementation of [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md).[data](../interfaces/_documentsnapshot_.documentsnapshot.md#optional-data)*

*Defined in [driver/firestore/FirestoreDocumentSnapshot.ts:21](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentSnapshot.ts#L21)*

___

###  ref

• **ref**: *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›*

*Implementation of [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md).[ref](../interfaces/_documentsnapshot_.documentsnapshot.md#ref)*

*Defined in [driver/firestore/FirestoreDocumentSnapshot.ts:20](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentSnapshot.ts#L20)*

___

### `Optional` updateTime

• **updateTime**? : *[Timestamp](_timestamp_.timestamp.md)*

*Implementation of [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md).[updateTime](../interfaces/_documentsnapshot_.documentsnapshot.md#optional-updatetime)*

*Defined in [driver/firestore/FirestoreDocumentSnapshot.ts:23](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentSnapshot.ts#L23)*

## Methods

###  exists

▸ **exists**(): *boolean*

*Implementation of [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)*

*Defined in [driver/firestore/FirestoreDocumentSnapshot.ts:25](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentSnapshot.ts#L25)*

**Returns:** *boolean*
