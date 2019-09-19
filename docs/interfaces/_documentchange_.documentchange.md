[nekostore](../README.md) › [Globals](../globals.md) › ["DocumentChange"](../modules/_documentchange_.md) › [DocumentChange](_documentchange_.documentchange.md)

# Interface: DocumentChange <**T**>

Document change information.

## Type parameters

▪ **T**

## Hierarchy

  ↳ [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md)‹T›

  ↳ **DocumentChange**

## Index

### Properties

* [createTime](_documentchange_.documentchange.md#optional-createtime)
* [data](_documentchange_.documentchange.md#optional-data)
* [newIndex](_documentchange_.documentchange.md#newindex)
* [oldIndex](_documentchange_.documentchange.md#oldindex)
* [ref](_documentchange_.documentchange.md#ref)
* [type](_documentchange_.documentchange.md#type)
* [updateTime](_documentchange_.documentchange.md#optional-updatetime)

### Methods

* [exists](_documentchange_.documentchange.md#exists)

## Properties

### `Optional` createTime

• **createTime**? : *[Timestamp](../classes/_timestamp_.timestamp.md)*

*Inherited from [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[createTime](_documentsnapshot_.documentsnapshot.md#optional-createtime)*

*Defined in [DocumentSnapshot.ts:32](https://github.com/esnya/nekostore/blob/f2443c4/src/DocumentSnapshot.ts#L32)*

Timestamp when the document was updated.

___

### `Optional` data

• **data**? : *T*

*Inherited from [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[data](_documentsnapshot_.documentsnapshot.md#optional-data)*

*Defined in [DocumentSnapshot.ts:27](https://github.com/esnya/nekostore/blob/f2443c4/src/DocumentSnapshot.ts#L27)*

Data of the document.

___

###  newIndex

• **newIndex**: *number*

*Defined in [DocumentChange.ts:17](https://github.com/esnya/nekostore/blob/f2443c4/src/DocumentChange.ts#L17)*

Index after change.

___

###  oldIndex

• **oldIndex**: *number*

*Defined in [DocumentChange.ts:22](https://github.com/esnya/nekostore/blob/f2443c4/src/DocumentChange.ts#L22)*

Index before change.

___

###  ref

• **ref**: *[DocumentReference](_documentreference_.documentreference.md)‹T›*

*Inherited from [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[ref](_documentsnapshot_.documentsnapshot.md#ref)*

*Defined in [DocumentSnapshot.ts:22](https://github.com/esnya/nekostore/blob/f2443c4/src/DocumentSnapshot.ts#L22)*

Reference for the document.

___

###  type

• **type**: *[ChangeType](../modules/_documentchange_.md#changetype)*

*Defined in [DocumentChange.ts:12](https://github.com/esnya/nekostore/blob/f2443c4/src/DocumentChange.ts#L12)*

Type of change. e.g. 'added', 'modified', 'removed'

___

### `Optional` updateTime

• **updateTime**? : *[Timestamp](../classes/_timestamp_.timestamp.md)*

*Inherited from [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[updateTime](_documentsnapshot_.documentsnapshot.md#optional-updatetime)*

*Defined in [DocumentSnapshot.ts:37](https://github.com/esnya/nekostore/blob/f2443c4/src/DocumentSnapshot.ts#L37)*

Timestamp when the document was updated.

## Methods

###  exists

▸ **exists**(): *boolean*

*Inherited from [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md).[exists](_documentsnapshot_.documentsnapshot.md#exists)*

*Defined in [DocumentSnapshot.ts:42](https://github.com/esnya/nekostore/blob/f2443c4/src/DocumentSnapshot.ts#L42)*

**Returns:** *boolean*

`true` if the document is existing.
