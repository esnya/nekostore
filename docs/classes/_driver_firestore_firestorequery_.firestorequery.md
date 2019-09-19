[nekostore](../README.md) › [Globals](../globals.md) › ["driver/firestore/FirestoreQuery"](../modules/_driver_firestore_firestorequery_.md) › [FirestoreQuery](_driver_firestore_firestorequery_.firestorequery.md)

# Class: FirestoreQuery <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **FirestoreQuery**

  ↳ [FirestoreCollectionReference](_driver_firestore_firestorecollectionreference_.firestorecollectionreference.md)

## Implements

* [Query](../interfaces/_query_.query.md)‹T›

## Index

### Constructors

* [constructor](_driver_firestore_firestorequery_.firestorequery.md#constructor)

### Properties

* [ref](_driver_firestore_firestorequery_.firestorequery.md#ref)

### Methods

* [endAt](_driver_firestore_firestorequery_.firestorequery.md#endat)
* [endBefore](_driver_firestore_firestorequery_.firestorequery.md#endbefore)
* [get](_driver_firestore_firestorequery_.firestorequery.md#get)
* [limit](_driver_firestore_firestorequery_.firestorequery.md#limit)
* [onSnapshot](_driver_firestore_firestorequery_.firestorequery.md#onsnapshot)
* [orderBy](_driver_firestore_firestorequery_.firestorequery.md#orderby)
* [startAfter](_driver_firestore_firestorequery_.firestorequery.md#startafter)
* [startAt](_driver_firestore_firestorequery_.firestorequery.md#startat)
* [where](_driver_firestore_firestorequery_.firestorequery.md#where)

## Constructors

###  constructor

\+ **new FirestoreQuery**(`ref`: Query): *[FirestoreQuery](_driver_firestore_firestorequery_.firestorequery.md)*

*Defined in [driver/firestore/FirestoreQuery.ts:20](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreQuery.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | Query |

**Returns:** *[FirestoreQuery](_driver_firestore_firestorequery_.firestorequery.md)*

## Properties

###  ref

• **ref**: *Query*

*Defined in [driver/firestore/FirestoreQuery.ts:25](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreQuery.ts#L25)*

## Methods

###  endAt

▸ **endAt**<**U**>(`value`: U): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [Query](../interfaces/_query_.query.md)*

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

*Implementation of [Query](../interfaces/_query_.query.md)*

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

*Implementation of [Query](../interfaces/_query_.query.md)*

*Defined in [driver/firestore/FirestoreQuery.ts:49](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreQuery.ts#L49)*

**Returns:** *Promise‹[QuerySnapshot](../interfaces/_querysnapshot_.querysnapshot.md)‹T››*

___

###  limit

▸ **limit**(`limit`: number): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [Query](../interfaces/_query_.query.md)*

*Defined in [driver/firestore/FirestoreQuery.ts:33](https://github.com/esnya/nekostore/blob/de830f5/src/driver/firestore/FirestoreQuery.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *[Query](../interfaces/_query_.query.md)‹T›*

___

###  onSnapshot

▸ **onSnapshot**(`onNext`: function): *Promise‹Unsubscribe›*

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

*Implementation of [Query](../interfaces/_query_.query.md)*

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

*Implementation of [Query](../interfaces/_query_.query.md)*

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

*Implementation of [Query](../interfaces/_query_.query.md)*

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

*Implementation of [Query](../interfaces/_query_.query.md)*

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
