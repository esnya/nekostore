[nekostore](../README.md) › [Globals](../globals.md) › ["DocumentSnapshot"](../modules/_documentsnapshot_.md) › [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md)

# Interface: DocumentSnapshot <**T**>

Data at the time of the document.

## Type parameters

▪ **T**

## Hierarchy

* object

  ↳ **DocumentSnapshot**

  ↳ [ExistingDocumentSnapshot](_documentsnapshot_.existingdocumentsnapshot.md)

  ↳ [DocumentChange](_documentchange_.documentchange.md)

## Index

### Properties

* [createTime](_documentsnapshot_.documentsnapshot.md#optional-createtime)
* [data](_documentsnapshot_.documentsnapshot.md#optional-data)
* [ref](_documentsnapshot_.documentsnapshot.md#ref)
* [updateTime](_documentsnapshot_.documentsnapshot.md#optional-updatetime)

### Methods

* [exists](_documentsnapshot_.documentsnapshot.md#exists)

## Properties

### `Optional` createTime

• **createTime**? : *[Timestamp](../classes/_timestamp_.timestamp.md)*

*Defined in [DocumentSnapshot.ts:32](https://github.com/esnya/nekostore/blob/f2443c4/src/DocumentSnapshot.ts#L32)*

Timestamp when the document was updated.

___

### `Optional` data

• **data**? : *T*

*Defined in [DocumentSnapshot.ts:27](https://github.com/esnya/nekostore/blob/f2443c4/src/DocumentSnapshot.ts#L27)*

Data of the document.

___

###  ref

• **ref**: *[DocumentReference](_documentreference_.documentreference.md)‹T›*

*Defined in [DocumentSnapshot.ts:22](https://github.com/esnya/nekostore/blob/f2443c4/src/DocumentSnapshot.ts#L22)*

Reference for the document.

___

### `Optional` updateTime

• **updateTime**? : *[Timestamp](../classes/_timestamp_.timestamp.md)*

*Defined in [DocumentSnapshot.ts:37](https://github.com/esnya/nekostore/blob/f2443c4/src/DocumentSnapshot.ts#L37)*

Timestamp when the document was updated.

## Methods

###  exists

▸ **exists**(): *boolean*

*Defined in [DocumentSnapshot.ts:42](https://github.com/esnya/nekostore/blob/f2443c4/src/DocumentSnapshot.ts#L42)*

**Returns:** *boolean*

`true` if the document is existing.
