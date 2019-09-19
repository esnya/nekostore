[nekostore](../README.md) › [Globals](../globals.md) › ["driver/basic/BasicDocumentSnapshot"](../modules/_driver_basic_basicdocumentsnapshot_.md) › [BasicDocumentSnapshot](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md)

# Class: BasicDocumentSnapshot <**T**>

## Type parameters

▪ **T**: *__type*

## Hierarchy

* **BasicDocumentSnapshot**

  ↳ [BasicDocumentChange](_driver_basic_basicdocumentchange_.basicdocumentchange.md)

## Implements

* [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T›

## Index

### Constructors

* [constructor](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md#constructor)

### Properties

* [createTime](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md#optional-createtime)
* [data](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md#optional-data)
* [ref](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md#ref)
* [updateTime](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md#optional-updatetime)

### Methods

* [exists](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md#exists)

## Constructors

###  constructor

\+ **new BasicDocumentSnapshot**(`ref`: [BasicDocumentReference](_driver_basic_basicdocumentreference_.basicdocumentreference.md)‹T›, `snapshot?`: [Data](../interfaces/_fakedriver_spec_.data.md)): *[BasicDocumentSnapshot](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md)*

*Defined in [driver/basic/BasicDocumentSnapshot.ts:8](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentSnapshot.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | [BasicDocumentReference](_driver_basic_basicdocumentreference_.basicdocumentreference.md)‹T› |
`snapshot?` | [Data](../interfaces/_fakedriver_spec_.data.md) |

**Returns:** *[BasicDocumentSnapshot](_driver_basic_basicdocumentsnapshot_.basicdocumentsnapshot.md)*

## Properties

### `Optional` createTime

• **createTime**? : *[Timestamp](_timestamp_.timestamp.md)*

*Implementation of [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md).[createTime](../interfaces/_documentsnapshot_.documentsnapshot.md#optional-createtime)*

*Defined in [driver/basic/BasicDocumentSnapshot.ts:22](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentSnapshot.ts#L22)*

___

### `Optional` data

• **data**? : *T*

*Implementation of [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md).[data](../interfaces/_documentsnapshot_.documentsnapshot.md#optional-data)*

*Defined in [driver/basic/BasicDocumentSnapshot.ts:21](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentSnapshot.ts#L21)*

___

###  ref

• **ref**: *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›*

*Implementation of [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md).[ref](../interfaces/_documentsnapshot_.documentsnapshot.md#ref)*

*Defined in [driver/basic/BasicDocumentSnapshot.ts:20](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentSnapshot.ts#L20)*

___

### `Optional` updateTime

• **updateTime**? : *[Timestamp](_timestamp_.timestamp.md)*

*Implementation of [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md).[updateTime](../interfaces/_documentsnapshot_.documentsnapshot.md#optional-updatetime)*

*Defined in [driver/basic/BasicDocumentSnapshot.ts:23](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentSnapshot.ts#L23)*

## Methods

###  exists

▸ **exists**(): *boolean*

*Implementation of [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)*

*Defined in [driver/basic/BasicDocumentSnapshot.ts:25](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentSnapshot.ts#L25)*

**Returns:** *boolean*
