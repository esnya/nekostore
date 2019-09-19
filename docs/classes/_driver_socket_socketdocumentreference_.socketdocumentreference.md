[nekostore](../README.md) › [Globals](../globals.md) › ["driver/socket/SocketDocumentReference"](../modules/_driver_socket_socketdocumentreference_.md) › [SocketDocumentReference](_driver_socket_socketdocumentreference_.socketdocumentreference.md)

# Class: SocketDocumentReference <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **SocketDocumentReference**

## Implements

* [DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›

## Index

### Constructors

* [constructor](_driver_socket_socketdocumentreference_.socketdocumentreference.md#constructor)

### Properties

* [id](_driver_socket_socketdocumentreference_.socketdocumentreference.md#id)
* [parent](_driver_socket_socketdocumentreference_.socketdocumentreference.md#parent)

### Accessors

* [driver](_driver_socket_socketdocumentreference_.socketdocumentreference.md#driver)
* [path](_driver_socket_socketdocumentreference_.socketdocumentreference.md#path)

### Methods

* [collection](_driver_socket_socketdocumentreference_.socketdocumentreference.md#collection)
* [delete](_driver_socket_socketdocumentreference_.socketdocumentreference.md#delete)
* [get](_driver_socket_socketdocumentreference_.socketdocumentreference.md#get)
* [onSnapshot](_driver_socket_socketdocumentreference_.socketdocumentreference.md#onsnapshot)
* [set](_driver_socket_socketdocumentreference_.socketdocumentreference.md#set)
* [update](_driver_socket_socketdocumentreference_.socketdocumentreference.md#update)

## Constructors

###  constructor

\+ **new SocketDocumentReference**(`parent`: [SocketCollectionReference](_driver_socket_socketcollectionreference_.socketcollectionreference.md)‹T›, `id`: string): *[SocketDocumentReference](_driver_socket_socketdocumentreference_.socketdocumentreference.md)*

*Defined in [driver/socket/SocketDocumentReference.ts:11](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentReference.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [SocketCollectionReference](_driver_socket_socketcollectionreference_.socketcollectionreference.md)‹T› |
`id` | string |

**Returns:** *[SocketDocumentReference](_driver_socket_socketdocumentreference_.socketdocumentreference.md)*

## Properties

###  id

• **id**: *string*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md).[id](../interfaces/_documentreference_.documentreference.md#id)*

*Defined in [driver/socket/SocketDocumentReference.ts:18](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentReference.ts#L18)*

___

###  parent

• **parent**: *[SocketCollectionReference](_driver_socket_socketcollectionreference_.socketcollectionreference.md)‹T›*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md).[parent](../interfaces/_documentreference_.documentreference.md#parent)*

*Defined in [driver/socket/SocketDocumentReference.ts:17](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentReference.ts#L17)*

## Accessors

###  driver

• **get driver**(): *SocketDriverSocket*

*Defined in [driver/socket/SocketDocumentReference.ts:24](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentReference.ts#L24)*

**Returns:** *SocketDriverSocket*

___

###  path

• **get path**(): *string*

*Defined in [driver/socket/SocketDocumentReference.ts:20](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentReference.ts#L20)*

**Returns:** *string*

## Methods

###  collection

▸ **collection**<**U**>(`id`: string): *[SocketCollectionReference](_driver_socket_socketcollectionreference_.socketcollectionreference.md)‹U›*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md)*

*Defined in [driver/socket/SocketDocumentReference.ts:28](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentReference.ts#L28)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[SocketCollectionReference](_driver_socket_socketcollectionreference_.socketcollectionreference.md)‹U›*

___

###  delete

▸ **delete**(): *Promise‹void›*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md)*

*Defined in [driver/socket/SocketDocumentReference.ts:48](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentReference.ts#L48)*

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(): *Promise‹[DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T››*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md)*

*Defined in [driver/socket/SocketDocumentReference.ts:32](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentReference.ts#L32)*

**Returns:** *Promise‹[DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T››*

___

###  onSnapshot

▸ **onSnapshot**(`onNext`: function): *Promise‹Unsubscribe›*

*Defined in [driver/socket/SocketDocumentReference.ts:52](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentReference.ts#L52)*

**Parameters:**

▪ **onNext**: *function*

▸ (`snapshot`: [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`snapshot` | [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T› |

**Returns:** *Promise‹Unsubscribe›*

___

###  set

▸ **set**(`data`: T): *Promise‹void›*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md)*

*Defined in [driver/socket/SocketDocumentReference.ts:40](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentReference.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *Promise‹void›*

___

###  update

▸ **update**(`data`: Partial‹T›): *Promise‹void›*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md)*

*Defined in [driver/socket/SocketDocumentReference.ts:44](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDocumentReference.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Partial‹T› |

**Returns:** *Promise‹void›*
