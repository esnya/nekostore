[nekostore](../README.md) › [Globals](../globals.md) › ["fakeDriver.spec"](../modules/_fakedriver_spec_.md) › [FakeDriver](_fakedriver_spec_.fakedriver.md)

# Interface: FakeDriver <**T, U**>

## Type parameters

▪ **T**

▪ **U**

## Hierarchy

* [Driver](_driver_.driver.md)

  ↳ **FakeDriver**

## Index

### Properties

* [fakeCollection](_fakedriver_spec_.fakedriver.md#fakecollection)
* [fakeDocument](_fakedriver_spec_.fakedriver.md#fakedocument)
* [fakeDocumentSnapshot](_fakedriver_spec_.fakedriver.md#fakedocumentsnapshot)
* [fakeQuerySnapshot](_fakedriver_spec_.fakedriver.md#fakequerysnapshot)
* [fakeSubCollection](_fakedriver_spec_.fakedriver.md#fakesubcollection)
* [fakeUnsubscribe](_fakedriver_spec_.fakedriver.md#fakeunsubscribe)

### Methods

* [collection](_fakedriver_spec_.fakedriver.md#collection)

## Properties

###  fakeCollection

• **fakeCollection**: *[CollectionReference](_collectionreference_.collectionreference.md)‹T›*

*Defined in [fakeDriver.spec.ts:16](https://github.com/esnya/nekostore/blob/de830f5/src/fakeDriver.spec.ts#L16)*

___

###  fakeDocument

• **fakeDocument**: *[DocumentReference](_documentreference_.documentreference.md)‹T›*

*Defined in [fakeDriver.spec.ts:18](https://github.com/esnya/nekostore/blob/de830f5/src/fakeDriver.spec.ts#L18)*

___

###  fakeDocumentSnapshot

• **fakeDocumentSnapshot**: *[DocumentSnapshot](_documentsnapshot_.documentsnapshot.md)‹T›*

*Defined in [fakeDriver.spec.ts:19](https://github.com/esnya/nekostore/blob/de830f5/src/fakeDriver.spec.ts#L19)*

___

###  fakeQuerySnapshot

• **fakeQuerySnapshot**: *[QuerySnapshot](_querysnapshot_.querysnapshot.md)‹T›*

*Defined in [fakeDriver.spec.ts:20](https://github.com/esnya/nekostore/blob/de830f5/src/fakeDriver.spec.ts#L20)*

___

###  fakeSubCollection

• **fakeSubCollection**: *[CollectionReference](_collectionreference_.collectionreference.md)‹U›*

*Defined in [fakeDriver.spec.ts:17](https://github.com/esnya/nekostore/blob/de830f5/src/fakeDriver.spec.ts#L17)*

___

###  fakeUnsubscribe

• **fakeUnsubscribe**: *Unsubscribe*

*Defined in [fakeDriver.spec.ts:21](https://github.com/esnya/nekostore/blob/de830f5/src/fakeDriver.spec.ts#L21)*

## Methods

###  collection

▸ **collection**<**T**>(`id`: string): *[CollectionReference](_collectionreference_.collectionreference.md)‹T›*

*Inherited from [Driver](_driver_.driver.md).[collection](_driver_.driver.md#collection)*

*Defined in [Driver.ts:11](https://github.com/esnya/nekostore/blob/de830f5/src/Driver.ts#L11)*

Collection reference getter.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string |   |

**Returns:** *[CollectionReference](_collectionreference_.collectionreference.md)‹T›*
