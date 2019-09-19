[nekostore](../README.md) › [Globals](../globals.md) › ["driver/basic/BasicDocumentChange"](../modules/_driver_basic_basicdocumentchange_.md) › [BasicDocumentChange](_driver_basic_basicdocumentchange_.basicdocumentchange.md)

# Class: BasicDocumentChange <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [BasicDocumentSnapshot](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md)‹T›

  ↳ **BasicDocumentChange**

## Implements

* [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T›
* [DocumentChange](../interfaces/_documentchange_.documentchange.md)‹T›

## Index

### Constructors

* [constructor](_driver_basic_basicdocumentchange_.basicdocumentchange.md#constructor)

### Properties

* [createTime](_driver_basic_basicdocumentchange_.basicdocumentchange.md#optional-createtime)
* [data](_driver_basic_basicdocumentchange_.basicdocumentchange.md#optional-data)
* [newIndex](_driver_basic_basicdocumentchange_.basicdocumentchange.md#newindex)
* [oldIndex](_driver_basic_basicdocumentchange_.basicdocumentchange.md#oldindex)
* [ref](_driver_basic_basicdocumentchange_.basicdocumentchange.md#ref)
* [type](_driver_basic_basicdocumentchange_.basicdocumentchange.md#type)
* [updateTime](_driver_basic_basicdocumentchange_.basicdocumentchange.md#optional-updatetime)

### Methods

* [exists](_driver_basic_basicdocumentchange_.basicdocumentchange.md#exists)

## Constructors

###  constructor

\+ **new BasicDocumentChange**(`ref`: [BasicDocumentReference](_driver_basic_basicdocumentreference_.basicdocumentreference.md)‹T›, `change`: object, `snapshot?`: [Data](../interfaces/_fakedriver_spec_.data.md)): *[BasicDocumentChange](_driver_basic_basicdocumentchange_.basicdocumentchange.md)*

*Overrides [BasicDocumentSnapshot](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md).[constructor](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md#constructor)*

*Defined in [driver/basic/BasicDocumentChange.ts:7](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentChange.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | [BasicDocumentReference](_driver_basic_basicdocumentreference_.basicdocumentreference.md)‹T› |
`change` | object |
`snapshot?` | [Data](../interfaces/_fakedriver_spec_.data.md) |

**Returns:** *[BasicDocumentChange](_driver_basic_basicdocumentchange_.basicdocumentchange.md)*

## Properties

### `Optional` createTime

• **createTime**? : *[Timestamp](_timestamp_.timestamp.md)*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[createTime](../interfaces/_documentchange_.documentchange.md#optional-createtime)*

*Inherited from [BasicDocumentSnapshot](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md).[createTime](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md#optional-createtime)*

*Defined in [driver/basic/BasicDocumentSnapshot.ts:22](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentSnapshot.ts#L22)*

___

### `Optional` data

• **data**? : *T*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[data](../interfaces/_documentchange_.documentchange.md#optional-data)*

*Inherited from [BasicDocumentSnapshot](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md).[data](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md#optional-data)*

*Defined in [driver/basic/BasicDocumentSnapshot.ts:21](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentSnapshot.ts#L21)*

___

###  newIndex

• **newIndex**: *number*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[newIndex](../interfaces/_documentchange_.documentchange.md#newindex)*

*Defined in [driver/basic/BasicDocumentChange.ts:25](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentChange.ts#L25)*

___

###  oldIndex

• **oldIndex**: *number*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[oldIndex](../interfaces/_documentchange_.documentchange.md#oldindex)*

*Defined in [driver/basic/BasicDocumentChange.ts:26](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentChange.ts#L26)*

___

###  ref

• **ref**: *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[ref](../interfaces/_documentchange_.documentchange.md#ref)*

*Inherited from [BasicDocumentSnapshot](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md).[ref](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md#ref)*

*Defined in [driver/basic/BasicDocumentSnapshot.ts:20](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentSnapshot.ts#L20)*

___

###  type

• **type**: *[ChangeType](../modules/_documentchange_.md#changetype)*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[type](../interfaces/_documentchange_.documentchange.md#type)*

*Defined in [driver/basic/BasicDocumentChange.ts:24](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentChange.ts#L24)*

___

### `Optional` updateTime

• **updateTime**? : *[Timestamp](_timestamp_.timestamp.md)*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[updateTime](../interfaces/_documentchange_.documentchange.md#optional-updatetime)*

*Inherited from [BasicDocumentSnapshot](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md).[updateTime](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md#optional-updatetime)*

*Defined in [driver/basic/BasicDocumentSnapshot.ts:23](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentSnapshot.ts#L23)*

## Methods

###  exists

▸ **exists**(): *boolean*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md)*

*Inherited from [BasicDocumentSnapshot](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md).[exists](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md#exists)*

*Defined in [driver/basic/BasicDocumentSnapshot.ts:25](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentSnapshot.ts#L25)*

**Returns:** *boolean*
