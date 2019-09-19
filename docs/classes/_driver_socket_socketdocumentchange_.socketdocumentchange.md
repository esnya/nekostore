[nekostore](../README.md) › [Globals](../globals.md) › ["driver/socket/SocketDocumentChange"](../modules/_driver_socket_socketdocumentchange_.md) › [SocketDocumentChange](_driver_socket_socketdocumentchange_.socketdocumentchange.md)

# Class: SocketDocumentChange <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [SocketDocumentSnapshot](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md)‹T›

  ↳ **SocketDocumentChange**

## Implements

* [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T›
* [DocumentChange](../interfaces/_documentchange_.documentchange.md)‹T›

## Index

### Constructors

* [constructor](_driver_socket_socketdocumentchange_.socketdocumentchange.md#constructor)

### Properties

* [createTime](_driver_socket_socketdocumentchange_.socketdocumentchange.md#optional-createtime)
* [data](_driver_socket_socketdocumentchange_.socketdocumentchange.md#optional-data)
* [newIndex](_driver_socket_socketdocumentchange_.socketdocumentchange.md#newindex)
* [oldIndex](_driver_socket_socketdocumentchange_.socketdocumentchange.md#oldindex)
* [ref](_driver_socket_socketdocumentchange_.socketdocumentchange.md#ref)
* [type](_driver_socket_socketdocumentchange_.socketdocumentchange.md#type)
* [updateTime](_driver_socket_socketdocumentchange_.socketdocumentchange.md#optional-updatetime)

### Methods

* [exists](_driver_socket_socketdocumentchange_.socketdocumentchange.md#exists)

## Constructors

###  constructor

\+ **new SocketDocumentChange**(`ref`: [DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›, `change`: [DocumentChangeData](../interfaces/_driver_socket_socketdocumentchange_.documentchangedata.md), `snapshot?`: [DocumentSnapshotData](../interfaces/_driver_socket_socketdocumentsnapshot_.documentsnapshotdata.md)‹T›): *[SocketDocumentChange](_driver_socket_socketdocumentchange_.socketdocumentchange.md)*

*Overrides [SocketDocumentSnapshot](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md).[constructor](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md#constructor)*

*Defined in [driver/socket/SocketDocumentChange.ts:14](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentChange.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | [DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T› |
`change` | [DocumentChangeData](../interfaces/_driver_socket_socketdocumentchange_.documentchangedata.md) |
`snapshot?` | [DocumentSnapshotData](../interfaces/_driver_socket_socketdocumentsnapshot_.documentsnapshotdata.md)‹T› |

**Returns:** *[SocketDocumentChange](_driver_socket_socketdocumentchange_.socketdocumentchange.md)*

## Properties

### `Optional` createTime

• **createTime**? : *[Timestamp](_timestamp_.timestamp.md)*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[createTime](../interfaces/_documentchange_.documentchange.md#optional-createtime)*

*Inherited from [SocketDocumentSnapshot](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md).[createTime](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md#optional-createtime)*

*Defined in [driver/socket/SocketDocumentSnapshot.ts:26](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentSnapshot.ts#L26)*

___

### `Optional` data

• **data**? : *T*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[data](../interfaces/_documentchange_.documentchange.md#optional-data)*

*Inherited from [SocketDocumentSnapshot](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md).[data](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md#optional-data)*

*Defined in [driver/socket/SocketDocumentSnapshot.ts:25](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentSnapshot.ts#L25)*

___

###  newIndex

• **newIndex**: *number*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[newIndex](../interfaces/_documentchange_.documentchange.md#newindex)*

*Defined in [driver/socket/SocketDocumentChange.ts:29](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentChange.ts#L29)*

___

###  oldIndex

• **oldIndex**: *number*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[oldIndex](../interfaces/_documentchange_.documentchange.md#oldindex)*

*Defined in [driver/socket/SocketDocumentChange.ts:30](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentChange.ts#L30)*

___

###  ref

• **ref**: *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[ref](../interfaces/_documentchange_.documentchange.md#ref)*

*Inherited from [SocketDocumentSnapshot](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md).[ref](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md#ref)*

*Defined in [driver/socket/SocketDocumentSnapshot.ts:24](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentSnapshot.ts#L24)*

___

###  type

• **type**: *[ChangeType](../modules/_documentchange_.md#changetype)*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[type](../interfaces/_documentchange_.documentchange.md#type)*

*Defined in [driver/socket/SocketDocumentChange.ts:28](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentChange.ts#L28)*

___

### `Optional` updateTime

• **updateTime**? : *[Timestamp](_timestamp_.timestamp.md)*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md).[updateTime](../interfaces/_documentchange_.documentchange.md#optional-updatetime)*

*Inherited from [SocketDocumentSnapshot](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md).[updateTime](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md#optional-updatetime)*

*Defined in [driver/socket/SocketDocumentSnapshot.ts:27](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentSnapshot.ts#L27)*

## Methods

###  exists

▸ **exists**(): *boolean*

*Implementation of [DocumentChange](../interfaces/_documentchange_.documentchange.md)*

*Inherited from [SocketDocumentSnapshot](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md).[exists](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md#exists)*

*Defined in [driver/socket/SocketDocumentSnapshot.ts:29](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentSnapshot.ts#L29)*

**Returns:** *boolean*
