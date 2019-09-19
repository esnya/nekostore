[nekostore](../README.md) › [Globals](../globals.md) › ["driver/firestore/FirestoreDocumedntChange"](../modules/_driver_firestore_firestoredocumedntchange_.md) › [FirestoreDocumentChange](_driver_firestore_firestoredocumedntchange_.firestoredocumentchange.md)

# Class: FirestoreDocumentChange <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [FirestoreDocumentSnapsnot](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md)‹T›

  ↳ **FirestoreDocumentChange**

## Implements

* [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T›
* [DocumentChange](../interfaces/_documentchange_.documentchange.md)‹T›

## Index

### Constructors

* [constructor](_driver_firestore_firestoredocumedntchange_.firestoredocumentchange.md#constructor)

### Properties

* [createTime](_driver_firestore_firestoredocumedntchange_.firestoredocumentchange.md#optional-createtime)
* [data](_driver_firestore_firestoredocumedntchange_.firestoredocumentchange.md#optional-data)
* [newIndex](_driver_firestore_firestoredocumedntchange_.firestoredocumentchange.md#newindex)
* [oldIndex](_driver_firestore_firestoredocumedntchange_.firestoredocumentchange.md#oldindex)
* [ref](_driver_firestore_firestoredocumedntchange_.firestoredocumentchange.md#ref)
* [type](_driver_firestore_firestoredocumedntchange_.firestoredocumentchange.md#type)
* [updateTime](_driver_firestore_firestoredocumedntchange_.firestoredocumentchange.md#optional-updatetime)

### Methods

* [exists](_driver_firestore_firestoredocumedntchange_.firestoredocumentchange.md#exists)

## Constructors

###  constructor

\+ **new FirestoreDocumentChange**(`change`: DocumentChange): *[FirestoreDocumentChange](_driver_firestore_firestoredocumedntchange_.firestoredocumentchange.md)*

*Overrides [FirestoreDocumentSnapsnot](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md).[constructor](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md#constructor)*

*Defined in [driver/firestore/FirestoreDocumedntChange.ts:6](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumedntChange.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`change` | DocumentChange |

**Returns:** *[FirestoreDocumentChange](_driver_firestore_firestoredocumedntchange_.firestoredocumentchange.md)*

## Properties

### `Optional` createTime

• **createTime**? : *[Timestamp](_timestamp_.timestamp.md)*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[createTime](../interfaces/_documentchange_.documentchange.md#optional-createtime)*

*Inherited from [FirestoreDocumentSnapsnot](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md).[createTime](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md#optional-createtime)*

*Defined in [driver/firestore/FirestoreDocumentSnapshot.ts:22](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentSnapshot.ts#L22)*

___

### `Optional` data

• **data**? : *T*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[data](../interfaces/_documentchange_.documentchange.md#optional-data)*

*Inherited from [FirestoreDocumentSnapsnot](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md).[data](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md#optional-data)*

*Defined in [driver/firestore/FirestoreDocumentSnapshot.ts:21](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentSnapshot.ts#L21)*

___

###  newIndex

• **newIndex**: *number*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[newIndex](../interfaces/_documentchange_.documentchange.md#newindex)*

*Defined in [driver/firestore/FirestoreDocumedntChange.ts:16](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumedntChange.ts#L16)*

___

###  oldIndex

• **oldIndex**: *number*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[oldIndex](../interfaces/_documentchange_.documentchange.md#oldindex)*

*Defined in [driver/firestore/FirestoreDocumedntChange.ts:17](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumedntChange.ts#L17)*

___

###  ref

• **ref**: *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[ref](../interfaces/_documentchange_.documentchange.md#ref)*

*Inherited from [FirestoreDocumentSnapsnot](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md).[ref](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md#ref)*

*Defined in [driver/firestore/FirestoreDocumentSnapshot.ts:20](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentSnapshot.ts#L20)*

___

###  type

• **type**: *[ChangeType](../modules/_documentchange_.md#changetype)*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[type](../interfaces/_documentchange_.documentchange.md#type)*

*Defined in [driver/firestore/FirestoreDocumedntChange.ts:15](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumedntChange.ts#L15)*

___

### `Optional` updateTime

• **updateTime**? : *[Timestamp](_timestamp_.timestamp.md)*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[updateTime](../interfaces/_documentchange_.documentchange.md#optional-updatetime)*

*Inherited from [FirestoreDocumentSnapsnot](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md).[updateTime](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md#optional-updatetime)*

*Defined in [driver/firestore/FirestoreDocumentSnapshot.ts:23](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentSnapshot.ts#L23)*

## Methods

###  exists

▸ **exists**(): *boolean*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md)*

*Inherited from [FirestoreDocumentSnapsnot](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md).[exists](_driver_firestore_firestoredocumentsnapshot_.firestoredocumentsnapsnot.md#exists)*

*Defined in [driver/firestore/FirestoreDocumentSnapshot.ts:25](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentSnapshot.ts#L25)*

**Returns:** *boolean*
