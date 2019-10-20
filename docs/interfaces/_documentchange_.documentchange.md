[nekostore](../README.md) › [Globals](../globals.md) › ["DocumentChange"](../modules/_documentchange_.md) › [DocumentChange](_documentchange_.documentchange.md)

# Interface: DocumentChange <**T**>

Document change information.

## Type parameters

▪ **T**

## Hierarchy

* [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md)‹T›

  ↳ **DocumentChange**

## Index

### Properties

* [data](_documentchange_.documentchange.md#optional-data)
* [newIndex](_documentchange_.documentchange.md#newindex)
* [oldIndex](_documentchange_.documentchange.md#oldindex)
* [ref](_documentchange_.documentchange.md#ref)
* [type](_documentchange_.documentchange.md#type)

### Methods

* [exists](_documentchange_.documentchange.md#exists)

## Properties

### `Optional` data

• **data**? : *T*

*Inherited from [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[data](_documentsnapshot_.documentsnapshot.md#optional-data)*

*Defined in [DocumentSnapshot.ts:22](https://github.com/esnya/nekostore/blob/master/src/DocumentSnapshot.ts#L22)*

Data of the document.

___

###  newIndex

• **newIndex**: *number*

*Defined in [DocumentChange.ts:17](https://github.com/esnya/nekostore/blob/master/src/DocumentChange.ts#L17)*

Index after change.

___

###  oldIndex

• **oldIndex**: *number*

*Defined in [DocumentChange.ts:22](https://github.com/esnya/nekostore/blob/master/src/DocumentChange.ts#L22)*

Index before change.

___

###  ref

• **ref**: *[DocumentReference](_documentreference_.documentreference.md)‹T›*

*Inherited from [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[ref](_documentsnapshot_.documentsnapshot.md#ref)*

*Defined in [DocumentSnapshot.ts:17](https://github.com/esnya/nekostore/blob/master/src/DocumentSnapshot.ts#L17)*

Reference for the document.

___

###  type

• **type**: *[ChangeType](../modules/_documentchange_.md#changetype)*

*Defined in [DocumentChange.ts:12](https://github.com/esnya/nekostore/blob/master/src/DocumentChange.ts#L12)*

Type of change. e.g. 'added', 'modified', 'removed'

## Methods

###  exists

▸ **exists**(): *boolean*

*Inherited from [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[exists](_documentsnapshot_.documentsnapshot.md#exists)*

*Defined in [DocumentSnapshot.ts:27](https://github.com/esnya/nekostore/blob/master/src/DocumentSnapshot.ts#L27)*

**Returns:** *boolean*

`true` if the document is existing.
