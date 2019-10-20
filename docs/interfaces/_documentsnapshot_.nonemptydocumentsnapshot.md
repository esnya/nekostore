[nekostore](../README.md) › [Globals](../globals.md) › ["DocumentSnapshot"](../modules/_documentsnapshot_.md) › [NonEmptyDocumentSnapshot](_documentsnapshot_.nonemptydocumentsnapshot.md)

# Interface: NonEmptyDocumentSnapshot <**T**>

Snapshot of existing document.

## Type parameters

▪ **T**

## Hierarchy

* [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md)‹T›

  ↳ **NonEmptyDocumentSnapshot**

## Index

### Properties

* [data](_documentsnapshot_.nonemptydocumentsnapshot.md#data)
* [ref](_documentsnapshot_.nonemptydocumentsnapshot.md#ref)

### Methods

* [exists](_documentsnapshot_.nonemptydocumentsnapshot.md#exists)

## Properties

###  data

• **data**: *T*

*Overrides [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[data](_documentsnapshot_.documentsnapshot.md#optional-data)*

*Defined in [DocumentSnapshot.ts:7](https://github.com/esnya/nekostore/blob/master/src/DocumentSnapshot.ts#L7)*

___

###  ref

• **ref**: *[DocumentReference](_documentreference_.documentreference.md)‹T›*

*Inherited from [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[ref](_documentsnapshot_.documentsnapshot.md#ref)*

*Defined in [DocumentSnapshot.ts:17](https://github.com/esnya/nekostore/blob/master/src/DocumentSnapshot.ts#L17)*

Reference for the document.

## Methods

###  exists

▸ **exists**(): *boolean*

*Inherited from [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[exists](_documentsnapshot_.documentsnapshot.md#exists)*

*Defined in [DocumentSnapshot.ts:27](https://github.com/esnya/nekostore/blob/master/src/DocumentSnapshot.ts#L27)*

**Returns:** *boolean*

`true` if the document is existing.
