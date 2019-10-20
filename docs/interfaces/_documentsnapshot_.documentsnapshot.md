[nekostore](../README.md) › [Globals](../globals.md) › ["DocumentSnapshot"](../modules/_documentsnapshot_.md) › [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md)

# Interface: DocumentSnapshot <**T**>

Data at the time of the document.

## Type parameters

▪ **T**

## Hierarchy

* **DocumentSnapshot**

  ↳ [NonEmptyDocumentSnapshot](_documentsnapshot_.nonemptydocumentsnapshot.md)

  ↳ [DocumentChange](_documentchange_.documentchange.md)

## Index

### Properties

* [data](_documentsnapshot_.documentsnapshot.md#optional-data)
* [ref](_documentsnapshot_.documentsnapshot.md#ref)

### Methods

* [exists](_documentsnapshot_.documentsnapshot.md#exists)

## Properties

### `Optional` data

• **data**? : *T*

*Defined in [DocumentSnapshot.ts:22](https://github.com/esnya/nekostore/blob/master/src/DocumentSnapshot.ts#L22)*

Data of the document.

___

###  ref

• **ref**: *[DocumentReference](_documentreference_.documentreference.md)‹T›*

*Defined in [DocumentSnapshot.ts:17](https://github.com/esnya/nekostore/blob/master/src/DocumentSnapshot.ts#L17)*

Reference for the document.

## Methods

###  exists

▸ **exists**(): *boolean*

*Defined in [DocumentSnapshot.ts:27](https://github.com/esnya/nekostore/blob/master/src/DocumentSnapshot.ts#L27)*

**Returns:** *boolean*

`true` if the document is existing.
