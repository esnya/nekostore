[nekostore](../README.md) › [Globals](../globals.md) › ["driver/firestore/FirestoreDocumentReference"](../modules/_driver_firestore_firestoredocumentreference_.md) › [FirestoreDocumentReference](_driver_firestore_firestoredocumentreference_.firestoredocumentreference.md)

# Class: FirestoreDocumentReference <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **FirestoreDocumentReference**

## Implements

* [DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›

## Index

### Constructors

* [constructor](_driver_firestore_firestoredocumentreference_.firestoredocumentreference.md#constructor)

### Properties

* [ref](_driver_firestore_firestoredocumentreference_.firestoredocumentreference.md#ref)

### Accessors

* [id](_driver_firestore_firestoredocumentreference_.firestoredocumentreference.md#id)
* [parent](_driver_firestore_firestoredocumentreference_.firestoredocumentreference.md#parent)
* [path](_driver_firestore_firestoredocumentreference_.firestoredocumentreference.md#path)

### Methods

* [collection](_driver_firestore_firestoredocumentreference_.firestoredocumentreference.md#collection)
* [delete](_driver_firestore_firestoredocumentreference_.firestoredocumentreference.md#delete)
* [get](_driver_firestore_firestoredocumentreference_.firestoredocumentreference.md#get)
* [onSnapshot](_driver_firestore_firestoredocumentreference_.firestoredocumentreference.md#onsnapshot)
* [set](_driver_firestore_firestoredocumentreference_.firestoredocumentreference.md#set)
* [update](_driver_firestore_firestoredocumentreference_.firestoredocumentreference.md#update)

## Constructors

###  constructor

\+ **new FirestoreDocumentReference**(`ref`: DocumentReference): *[FirestoreDocumentReference](_driver_firestore_firestoredocumentreference_.firestoredocumentreference.md)*

*Defined in [driver/firestore/FirestoreDocumentReference.ts:11](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentReference.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | DocumentReference |

**Returns:** *[FirestoreDocumentReference](_driver_firestore_firestoredocumentreference_.firestoredocumentreference.md)*

## Properties

###  ref

• **ref**: *DocumentReference*

*Defined in [driver/firestore/FirestoreDocumentReference.ts:16](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentReference.ts#L16)*

## Accessors

###  id

• **get id**(): *string*

*Defined in [driver/firestore/FirestoreDocumentReference.ts:18](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentReference.ts#L18)*

**Returns:** *string*

___

###  parent

• **get parent**(): *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*

*Defined in [driver/firestore/FirestoreDocumentReference.ts:26](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentReference.ts#L26)*

**Returns:** *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*

___

###  path

• **get path**(): *string*

*Defined in [driver/firestore/FirestoreDocumentReference.ts:22](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentReference.ts#L22)*

**Returns:** *string*

## Methods

###  collection

▸ **collection**<**U**>(`id`: string): *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹U›*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md)*

*Defined in [driver/firestore/FirestoreDocumentReference.ts:30](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentReference.ts#L30)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹U›*

___

###  delete

▸ **delete**(): *Promise‹void›*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md)*

*Defined in [driver/firestore/FirestoreDocumentReference.ts:54](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentReference.ts#L54)*

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(): *Promise‹[DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T››*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md)*

*Defined in [driver/firestore/FirestoreDocumentReference.ts:34](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentReference.ts#L34)*

**Returns:** *Promise‹[DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T››*

___

###  onSnapshot

▸ **onSnapshot**(`onNext`: function): *Promise‹Unsubscribe›*

*Defined in [driver/firestore/FirestoreDocumentReference.ts:58](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentReference.ts#L58)*

**Parameters:**

▪ **onNext**: *function*

▸ (`value`: [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T› |

**Returns:** *Promise‹Unsubscribe›*

___

###  set

▸ **set**(`data`: T): *Promise‹void›*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md)*

*Defined in [driver/firestore/FirestoreDocumentReference.ts:39](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentReference.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *Promise‹void›*

___

###  update

▸ **update**(`data`: Partial‹T›): *Promise‹void›*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md)*

*Defined in [driver/firestore/FirestoreDocumentReference.ts:43](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreDocumentReference.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Partial‹T› |

**Returns:** *Promise‹void›*
