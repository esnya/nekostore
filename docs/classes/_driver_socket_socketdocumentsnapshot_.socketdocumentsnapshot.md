[nekostore](../README.md) › [Globals](../globals.md) › ["driver/socket/SocketDocumentSnapshot"](../modules/_driver_socket_socketdocumentsnapshot_.md) › [SocketDocumentSnapshot](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md)

# Class: SocketDocumentSnapshot <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **SocketDocumentSnapshot**

  ↳ [SocketDocumentChange](_driver_socket_socketdocumentchange_.socketdocumentchange.md)

## Implements

* [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T›

## Index

### Constructors

* [constructor](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md#constructor)

### Properties

* [createTime](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md#optional-createtime)
* [data](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md#optional-data)
* [ref](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md#ref)
* [updateTime](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md#optional-updatetime)

### Methods

* [exists](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md#exists)

## Constructors

###  constructor

\+ **new SocketDocumentSnapshot**(`ref`: [DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›, `snapshot?`: [DocumentSnapshotData](../interfaces/_driver_socket_socketdocumentsnapshot_.documentsnapshotdata.md)‹T›): *[SocketDocumentSnapshot](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md)*

*Defined in [driver/socket/SocketDocumentSnapshot.ts:11](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentSnapshot.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | [DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T› |
`snapshot?` | [DocumentSnapshotData](../interfaces/_driver_socket_socketdocumentsnapshot_.documentsnapshotdata.md)‹T› |

**Returns:** *[SocketDocumentSnapshot](_driver_socket_socketdocumentsnapshot_.socketdocumentsnapshot.md)*

## Properties

### `Optional` createTime

• **createTime**? : *[Timestamp](_timestamp_.timestamp.md)*

*Implementation of [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md).[createTime](../interfaces/_documentsnapshot_.documentsnapshot.md#optional-createtime)*

*Defined in [driver/socket/SocketDocumentSnapshot.ts:26](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentSnapshot.ts#L26)*

___

### `Optional` data

• **data**? : *T*

*Implementation of [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md).[data](../interfaces/_documentsnapshot_.documentsnapshot.md#optional-data)*

*Defined in [driver/socket/SocketDocumentSnapshot.ts:25](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentSnapshot.ts#L25)*

___

###  ref

• **ref**: *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›*

*Implementation of [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md).[ref](../interfaces/_documentsnapshot_.documentsnapshot.md#ref)*

*Defined in [driver/socket/SocketDocumentSnapshot.ts:24](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentSnapshot.ts#L24)*

___

### `Optional` updateTime

• **updateTime**? : *[Timestamp](_timestamp_.timestamp.md)*

*Implementation of [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md).[updateTime](../interfaces/_documentsnapshot_.documentsnapshot.md#optional-updatetime)*

*Defined in [driver/socket/SocketDocumentSnapshot.ts:27](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentSnapshot.ts#L27)*

## Methods

###  exists

▸ **exists**(): *boolean*

*Implementation of [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)*

*Defined in [driver/socket/SocketDocumentSnapshot.ts:29](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentSnapshot.ts#L29)*

**Returns:** *boolean*
