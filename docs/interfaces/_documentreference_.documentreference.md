[nekostore](../README.md) › [Globals](../globals.md) › ["DocumentReference"](../modules/_documentreference_.md) › [DocumentReference](_documentreference_.documentreference.md)

# Interface: DocumentReference <**T**>

Reference for the document.

## Type parameters

▪ **T**

## Hierarchy

* **DocumentReference**

## Implemented by

* [BasicDocumentReference](../classes/_driver_basic_basicdocumentreference_.basicdocumentreference.md)
* [FirestoreDocumentReference](../classes/_driver_firestore_firestoredocumentreference_.firestoredocumentreference.md)
* [SocketDocumentReference](../classes/_driver_socket_socketdocumentreference_.socketdocumentreference.md)

## Index

### Properties

* [id](_documentreference_.documentreference.md#id)
* [parent](_documentreference_.documentreference.md#parent)
* [path](_documentreference_.documentreference.md#path)

### Methods

* [collection](_documentreference_.documentreference.md#collection)
* [delete](_documentreference_.documentreference.md#delete)
* [get](_documentreference_.documentreference.md#get)
* [onSnapshot](_documentreference_.documentreference.md#onsnapshot)
* [set](_documentreference_.documentreference.md#set)
* [update](_documentreference_.documentreference.md#update)

## Properties

###  id

• **id**: *string*

*Defined in [DocumentReference.ts:12](https://github.com/esnya/nekostore/blob/de830f5/src/DocumentReference.ts#L12)*

ID of the document.

___

###  parent

• **parent**: *[CollectionReference](_collectionreference_.collectionreference.md)‹T›*

*Defined in [DocumentReference.ts:22](https://github.com/esnya/nekostore/blob/de830f5/src/DocumentReference.ts#L22)*

Reference of the parent collection.

___

###  path

• **path**: *string*

*Defined in [DocumentReference.ts:17](https://github.com/esnya/nekostore/blob/de830f5/src/DocumentReference.ts#L17)*

Path from the route separated by "/"

## Methods

###  collection

▸ **collection**<**U**>(`id`: string): *[CollectionReference](_collectionreference_.collectionreference.md)‹U›*

*Defined in [DocumentReference.ts:29](https://github.com/esnya/nekostore/blob/de830f5/src/DocumentReference.ts#L29)*

Get reference for the child collection

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[CollectionReference](_collectionreference_.collectionreference.md)‹U›*

Reference for the child collection.

___

###  delete

▸ **delete**(): *Promise‹void›*

*Defined in [DocumentReference.ts:51](https://github.com/esnya/nekostore/blob/de830f5/src/DocumentReference.ts#L51)*

Delete document.

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(): *Promise‹[DocumentSnapshot](_documentsnapshot_.documentsnapshot.md)‹T››*

*Defined in [DocumentReference.ts:34](https://github.com/esnya/nekostore/blob/de830f5/src/DocumentReference.ts#L34)*

Get a snapshot of document.

**Returns:** *Promise‹[DocumentSnapshot](_documentsnapshot_.documentsnapshot.md)‹T››*

___

###  onSnapshot

▸ **onSnapshot**(`onNext`: function): *Promise‹Unsubscribe›*

*Defined in [DocumentReference.ts:58](https://github.com/esnya/nekostore/blob/de830f5/src/DocumentReference.ts#L58)*

Receive snapshots of the document when updated.

**Parameters:**

▪ **onNext**: *function*

▸ (`snapshot`: [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`snapshot` | [DocumentSnapshot](_documentsnapshot_.documentsnapshot.md)‹T› |

**Returns:** *Promise‹Unsubscribe›*

Function to unsubscribe.

___

###  set

▸ **set**(`data`: T): *Promise‹void›*

*Defined in [DocumentReference.ts:40](https://github.com/esnya/nekostore/blob/de830f5/src/DocumentReference.ts#L40)*

Set document data.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | T |   |

**Returns:** *Promise‹void›*

___

###  update

▸ **update**(`data`: Partial‹T›): *Promise‹void›*

*Defined in [DocumentReference.ts:46](https://github.com/esnya/nekostore/blob/de830f5/src/DocumentReference.ts#L46)*

Update document data. Data will merged deeply. For existing documents only.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | Partial‹T› |   |

**Returns:** *Promise‹void›*
