[nekostore](../README.md) › [Globals](../globals.md) › ["DocumentSnapshot"](../modules/_documentsnapshot_.md) › [ExistingDocumentSnapshot](_documentsnapshot_.existingdocumentsnapshot.md)

# Interface: ExistingDocumentSnapshot <**T**>

Snapshot of existing document.

## Type parameters

▪ **T**

## Hierarchy

  ↳ [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md)‹T›

* [Timestamps](_timestamp_.timestamps.md)

  ↳ **ExistingDocumentSnapshot**

## Index

### Properties

* [createTime](_documentsnapshot_.existingdocumentsnapshot.md#createtime)
* [data](_documentsnapshot_.existingdocumentsnapshot.md#data)
* [ref](_documentsnapshot_.existingdocumentsnapshot.md#ref)
* [updateTime](_documentsnapshot_.existingdocumentsnapshot.md#updatetime)

### Methods

* [exists](_documentsnapshot_.existingdocumentsnapshot.md#exists)

## Properties

###  createTime

• **createTime**: *[Timestamp](../classes/_timestamp_.timestamp.md)*

*Overrides [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[createTime](_documentsnapshot_.documentsnapshot.md#optional-createtime)*

*Defined in [DocumentSnapshot.ts:11](https://github.com/esnya/nekostore/blob/master/src/DocumentSnapshot.ts#L11)*

___

###  data

• **data**: *T*

*Overrides [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[data](_documentsnapshot_.documentsnapshot.md#optional-data)*

*Defined in [DocumentSnapshot.ts:10](https://github.com/esnya/nekostore/blob/master/src/DocumentSnapshot.ts#L10)*

___

###  ref

• **ref**: *[DocumentReference](_documentreference_.documentreference.md)‹T›*

*Inherited from [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[ref](_documentsnapshot_.documentsnapshot.md#ref)*

*Defined in [DocumentSnapshot.ts:22](https://github.com/esnya/nekostore/blob/master/src/DocumentSnapshot.ts#L22)*

Reference for the document.

___

###  updateTime

• **updateTime**: *[Timestamp](../classes/_timestamp_.timestamp.md)*

*Overrides [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[updateTime](_documentsnapshot_.documentsnapshot.md#optional-updatetime)*

*Defined in [DocumentSnapshot.ts:12](https://github.com/esnya/nekostore/blob/master/src/DocumentSnapshot.ts#L12)*

## Methods

###  exists

▸ **exists**(): *boolean*

*Inherited from [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[exists](_documentsnapshot_.documentsnapshot.md#exists)*

*Defined in [DocumentSnapshot.ts:42](https://github.com/esnya/nekostore/blob/master/src/DocumentSnapshot.ts#L42)*

**Returns:** *boolean*

`true` if the document is existing.
