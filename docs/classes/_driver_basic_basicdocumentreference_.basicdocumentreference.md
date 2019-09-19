[nekostore](../README.md) › [Globals](../globals.md) › ["driver/basic/BasicDocumentReference"](../modules/_driver_basic_basicdocumentreference_.md) › [BasicDocumentReference](_driver_basic_basicdocumentreference_.basicdocumentreference.md)

# Class: BasicDocumentReference <**T**>

## Type parameters

▪ **T**: *__type*

## Hierarchy

* **BasicDocumentReference**

## Implements

* [DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›

## Index

### Constructors

* [constructor](_driver_basic_basicdocumentreference_.basicdocumentreference.md#constructor)

### Properties

* [id](_driver_basic_basicdocumentreference_.basicdocumentreference.md#id)
* [parent](_driver_basic_basicdocumentreference_.basicdocumentreference.md#parent)

### Accessors

* [driver](_driver_basic_basicdocumentreference_.basicdocumentreference.md#driver)
* [path](_driver_basic_basicdocumentreference_.basicdocumentreference.md#path)

### Methods

* [collection](_driver_basic_basicdocumentreference_.basicdocumentreference.md#collection)
* [delete](_driver_basic_basicdocumentreference_.basicdocumentreference.md#delete)
* [get](_driver_basic_basicdocumentreference_.basicdocumentreference.md#get)
* [onSnapshot](_driver_basic_basicdocumentreference_.basicdocumentreference.md#onsnapshot)
* [set](_driver_basic_basicdocumentreference_.basicdocumentreference.md#set)
* [update](_driver_basic_basicdocumentreference_.basicdocumentreference.md#update)

## Constructors

###  constructor

\+ **new BasicDocumentReference**(`parent`: [BasicCollectionReference](_driver_basic_basiccollectionreference_.basiccollectionreference.md)‹T›, `id`: string): *[BasicDocumentReference](_driver_basic_basicdocumentreference_.basicdocumentreference.md)*

*Defined in [driver/basic/BasicDocumentReference.ts:11](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentReference.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [BasicCollectionReference](_driver_basic_basiccollectionreference_.basiccollectionreference.md)‹T› |
`id` | string |

**Returns:** *[BasicDocumentReference](_driver_basic_basicdocumentreference_.basicdocumentreference.md)*

## Properties

###  id

• **id**: *string*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md).[id](../interfaces/_documentreference_.documentreference.md#id)*

*Defined in [driver/basic/BasicDocumentReference.ts:18](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentReference.ts#L18)*

___

###  parent

• **parent**: *[BasicCollectionReference](_driver_basic_basiccollectionreference_.basiccollectionreference.md)‹T›*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md).[parent](../interfaces/_documentreference_.documentreference.md#parent)*

*Defined in [driver/basic/BasicDocumentReference.ts:17](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentReference.ts#L17)*

## Accessors

###  driver

• **get driver**(): *[BasicDriver](_driver_basic_basicdriver_.basicdriver.md)*

*Defined in [driver/basic/BasicDocumentReference.ts:24](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentReference.ts#L24)*

**Returns:** *[BasicDriver](_driver_basic_basicdriver_.basicdriver.md)*

___

###  path

• **get path**(): *string*

*Defined in [driver/basic/BasicDocumentReference.ts:20](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentReference.ts#L20)*

**Returns:** *string*

## Methods

###  collection

▸ **collection**<**U**>(`id`: string): *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹U›*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md)*

*Defined in [driver/basic/BasicDocumentReference.ts:28](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentReference.ts#L28)*

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

*Defined in [driver/basic/BasicDocumentReference.ts:82](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentReference.ts#L82)*

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(): *Promise‹[DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T››*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md)*

*Defined in [driver/basic/BasicDocumentReference.ts:32](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentReference.ts#L32)*

**Returns:** *Promise‹[DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T››*

___

###  onSnapshot

▸ **onSnapshot**(`onNext`: function): *Promise‹Unsubscribe›*

*Defined in [driver/basic/BasicDocumentReference.ts:97](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentReference.ts#L97)*

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

*Defined in [driver/basic/BasicDocumentReference.ts:41](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentReference.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *Promise‹void›*

___

###  update

▸ **update**(`data`: Partial‹T›): *Promise‹void›*

*Implementation of [DocumentReference](../interfaces/_documentreference_.documentreference.md)*

*Defined in [driver/basic/BasicDocumentReference.ts:52](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicDocumentReference.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Partial‹T› |

**Returns:** *Promise‹void›*
