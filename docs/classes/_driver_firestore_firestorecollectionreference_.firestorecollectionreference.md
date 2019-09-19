[nekostore](../README.md) › [Globals](../globals.md) › ["driver/firestore/FirestoreCollectionReference"](../modules/_driver_firestore_firestorecollectionreference_.md) › [FirestoreCollectionReference](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md)

# Class: FirestoreCollectionReference <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [FirestoreQuery](_driver_firestore_firestorequery_.firestorequery.md)‹T›

  ↳ **FirestoreCollectionReference**

## Implements

* [Query](../interfaces/_query_.query.md)‹T›
* [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›

## Index

### Constructors

* [constructor](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md#constructor)

### Properties

* [ref](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md#ref)

### Accessors

* [id](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md#id)
* [path](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md#path)

### Methods

* [add](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md#add)
* [doc](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md#doc)
* [endAt](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md#endat)
* [endBefore](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md#endbefore)
* [get](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md#get)
* [limit](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md#limit)
* [onSnapshot](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md#onsnapshot)
* [orderBy](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md#orderby)
* [startAfter](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md#startafter)
* [startAt](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md#startat)
* [where](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md#where)

## Constructors

###  constructor

\+ **new FirestoreCollectionReference**(`ref`: CollectionReference): *[FirestoreCollectionReference](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md)*

*Overrides [FirestoreQuery](_driver_firestore_firestorequery_.firestorequery.md).[constructor](_driver_firestore_firestorequery_.firestorequery.md#constructor)*

*Defined in [driver/firestore/FirestoreCollectionReference.ts:9](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreCollectionReference.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | CollectionReference |

**Returns:** *[FirestoreCollectionReference](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md)*

## Properties

###  ref

• **ref**: *CollectionReference*

*Overrides [FirestoreQuery](_driver_firestore_firestorequery_.firestorequery.md).[ref](_driver_firestore_firestorequery_.firestorequery.md#ref)*

*Defined in [driver/firestore/FirestoreCollectionReference.ts:15](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreCollectionReference.ts#L15)*

## Accessors

###  id

• **get id**(): *string*

*Defined in [driver/firestore/FirestoreCollectionReference.ts:17](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreCollectionReference.ts#L17)*

**Returns:** *string*

___

###  path

• **get path**(): *string*

*Defined in [driver/firestore/FirestoreCollectionReference.ts:21](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreCollectionReference.ts#L21)*

**Returns:** *string*

## Methods

###  add

▸ **add**(`data`: T): *Promise‹[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T››*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Defined in [driver/firestore/FirestoreCollectionReference.ts:29](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreCollectionReference.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *Promise‹[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T››*

___

###  doc

▸ **doc**(`id`: string): *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Defined in [driver/firestore/FirestoreCollectionReference.ts:25](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreCollectionReference.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›*

___

###  endAt

▸ **endAt**<**U**>(`value`: U): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Inherited from [FirestoreQuery](_driver_firestore_firestorequery_.firestorequery.md).[endAt](_driver_firestore_firestorequery_.firestorequery.md#endat)*

*Defined in [driver/firestore/FirestoreQuery.ts:27](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreQuery.ts#L27)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`value` | U |

**Returns:** *[Query](../interfaces/_query_.query.md)‹T›*

___

###  endBefore

▸ **endBefore**<**U**>(`value`: U): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Inherited from [FirestoreQuery](_driver_firestore_firestorequery_.firestorequery.md).[endBefore](_driver_firestore_firestorequery_.firestorequery.md#endbefore)*

*Defined in [driver/firestore/FirestoreQuery.ts:30](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreQuery.ts#L30)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`value` | U |

**Returns:** *[Query](../interfaces/_query_.query.md)‹T›*

___

###  get

▸ **get**(): *Promise‹[QuerySnapshot](../interfaces/_querysnapshot_.querysnapshot.md)‹T››*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Inherited from [FirestoreQuery](_driver_firestore_firestorequery_.firestorequery.md).[get](_driver_firestore_firestorequery_.firestorequery.md#get)*

*Defined in [driver/firestore/FirestoreQuery.ts:49](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreQuery.ts#L49)*

**Returns:** *Promise‹[QuerySnapshot](../interfaces/_querysnapshot_.querysnapshot.md)‹T››*

___

###  limit

▸ **limit**(`limit`: number): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Inherited from [FirestoreQuery](_driver_firestore_firestorequery_.firestorequery.md).[limit](_driver_firestore_firestorequery_.firestorequery.md#limit)*

*Defined in [driver/firestore/FirestoreQuery.ts:33](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreQuery.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *[Query](../interfaces/_query_.query.md)‹T›*

___

###  onSnapshot

▸ **onSnapshot**(`onNext`: function): *Promise‹Unsubscribe›*

*Inherited from [FirestoreQuery](_driver_firestore_firestorequery_.firestorequery.md).[onSnapshot](_driver_firestore_firestorequery_.firestorequery.md#onsnapshot)*

*Defined in [driver/firestore/FirestoreQuery.ts:52](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreQuery.ts#L52)*

**Parameters:**

▪ **onNext**: *function*

▸ (`value`: [QuerySnapshot](../interfaces/_querysnapshot_.querysnapshot.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [QuerySnapshot](../interfaces/_querysnapshot_.querysnapshot.md)‹T› |

**Returns:** *Promise‹Unsubscribe›*

___

###  orderBy

▸ **orderBy**(`field`: string, `direction?`: [OrderDirection](../modules/_query_.md#orderdirection)): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Inherited from [FirestoreQuery](_driver_firestore_firestorequery_.firestorequery.md).[orderBy](_driver_firestore_firestorequery_.firestorequery.md#orderby)*

*Defined in [driver/firestore/FirestoreQuery.ts:36](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreQuery.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | string |
`direction?` | [OrderDirection](../modules/_query_.md#orderdirection) |

**Returns:** *[Query](../interfaces/_query_.query.md)‹T›*

___

###  startAfter

▸ **startAfter**<**U**>(`value`: U): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Inherited from [FirestoreQuery](_driver_firestore_firestorequery_.firestorequery.md).[startAfter](_driver_firestore_firestorequery_.firestorequery.md#startafter)*

*Defined in [driver/firestore/FirestoreQuery.ts:39](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreQuery.ts#L39)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`value` | U |

**Returns:** *[Query](../interfaces/_query_.query.md)‹T›*

___

###  startAt

▸ **startAt**<**U**>(`value`: U): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Inherited from [FirestoreQuery](_driver_firestore_firestorequery_.firestorequery.md).[startAt](_driver_firestore_firestorequery_.firestorequery.md#startat)*

*Defined in [driver/firestore/FirestoreQuery.ts:42](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreQuery.ts#L42)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`value` | U |

**Returns:** *[Query](../interfaces/_query_.query.md)‹T›*

___

###  where

▸ **where**<**U**>(`field`: string, `operator`: [WhereOperator](../modules/_query_.md#whereoperator), `value`: U): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Inherited from [FirestoreQuery](_driver_firestore_firestorequery_.firestorequery.md).[where](_driver_firestore_firestorequery_.firestorequery.md#where)*

*Defined in [driver/firestore/FirestoreQuery.ts:45](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreQuery.ts#L45)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`field` | string |
`operator` | [WhereOperator](../modules/_query_.md#whereoperator) |
`value` | U |

**Returns:** *[Query](../interfaces/_query_.query.md)‹T›*
