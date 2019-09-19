[nekostore](../README.md) › [Globals](../globals.md) › ["driver/basic/BasicCollectionReference"](../modules/_driver_basic_basiccollectionreference_.md) › [BasicCollectionReference](_driver_basic_basiccollectionreference_.basiccollectionreference.md)

# Class: BasicCollectionReference <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [BasicQuery](_driver_basic_basicquery_.basicquery.md)‹T›

  ↳ **BasicCollectionReference**

## Implements

* [Query](../interfaces/_query_.query.md)‹T›
* [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›

## Index

### Constructors

* [constructor](_driver_basic_basiccollectionreference_.basiccollectionreference.md#constructor)

### Properties

* [driver](_driver_basic_basiccollectionreference_.basiccollectionreference.md#driver)
* [id](_driver_basic_basiccollectionreference_.basiccollectionreference.md#id)
* [operators](_driver_basic_basiccollectionreference_.basiccollectionreference.md#operators)
* [parent](_driver_basic_basiccollectionreference_.basiccollectionreference.md#parent)

### Accessors

* [path](_driver_basic_basiccollectionreference_.basiccollectionreference.md#path)

### Methods

* [add](_driver_basic_basiccollectionreference_.basiccollectionreference.md#add)
* [doc](_driver_basic_basiccollectionreference_.basiccollectionreference.md#doc)
* [endAt](_driver_basic_basiccollectionreference_.basiccollectionreference.md#endat)
* [endBefore](_driver_basic_basiccollectionreference_.basiccollectionreference.md#endbefore)
* [get](_driver_basic_basiccollectionreference_.basiccollectionreference.md#get)
* [limit](_driver_basic_basiccollectionreference_.basiccollectionreference.md#limit)
* [onSnapshot](_driver_basic_basiccollectionreference_.basiccollectionreference.md#onsnapshot)
* [orderBy](_driver_basic_basiccollectionreference_.basiccollectionreference.md#orderby)
* [startAfter](_driver_basic_basiccollectionreference_.basiccollectionreference.md#startafter)
* [startAt](_driver_basic_basiccollectionreference_.basiccollectionreference.md#startat)
* [where](_driver_basic_basiccollectionreference_.basiccollectionreference.md#where)

## Constructors

###  constructor

\+ **new BasicCollectionReference**(`driver`: [BasicDriver](_driver_basic_basicdriver_.basicdriver.md), `id`: string, `parent?`: [BasicDocumentReference](_driver_basic_basicdocumentreference_.basicdocumentreference.md)‹any›): *[BasicCollectionReference](_driver_basic_basiccollectionreference_.basiccollectionreference.md)*

*Overrides [BasicQuery](_driver_basic_basicquery_.basicquery.md).[constructor](_driver_basic_basicquery_.basicquery.md#constructor)*

*Defined in [driver/basic/BasicCollectionReference.ts:10](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicCollectionReference.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`driver` | [BasicDriver](_driver_basic_basicdriver_.basicdriver.md) |
`id` | string |
`parent?` | [BasicDocumentReference](_driver_basic_basicdocumentreference_.basicdocumentreference.md)‹any› |

**Returns:** *[BasicCollectionReference](_driver_basic_basiccollectionreference_.basiccollectionreference.md)*

## Properties

###  driver

• **driver**: *[BasicDriver](_driver_basic_basicdriver_.basicdriver.md)*

*Inherited from [BasicQuery](_driver_basic_basicquery_.basicquery.md).[driver](_driver_basic_basicquery_.basicquery.md#driver)*

*Defined in [driver/basic/BasicQuery.ts:35](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicQuery.ts#L35)*

___

###  id

• **id**: *string*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md).[id](../interfaces/_collectionreference_.collectionreference.md#id)*

*Overrides [BasicQuery](_driver_basic_basicquery_.basicquery.md).[id](_driver_basic_basicquery_.basicquery.md#id)*

*Defined in [driver/basic/BasicCollectionReference.ts:21](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicCollectionReference.ts#L21)*

___

###  operators

• **operators**: *[AggregationOperator](../interfaces/_driver_basic_aggregatiooperator_.aggregationoperator.md)[]*

*Inherited from [BasicQuery](_driver_basic_basicquery_.basicquery.md).[operators](_driver_basic_basicquery_.basicquery.md#operators)*

*Defined in [driver/basic/BasicQuery.ts:39](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicQuery.ts#L39)*

___

###  parent

• **parent**: *[BasicDocumentReference](_driver_basic_basicdocumentreference_.basicdocumentreference.md)‹any›*

*Inherited from [BasicQuery](_driver_basic_basicquery_.basicquery.md).[parent](_driver_basic_basicquery_.basicquery.md#parent)*

*Defined in [driver/basic/BasicQuery.ts:38](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicQuery.ts#L38)*

## Accessors

###  path

• **get path**(): *string*

*Inherited from [BasicQuery](_driver_basic_basicquery_.basicquery.md).[path](_driver_basic_basicquery_.basicquery.md#path)*

*Defined in [driver/basic/BasicQuery.ts:41](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicQuery.ts#L41)*

**Returns:** *string*

## Methods

###  add

▸ **add**(`data`: T): *Promise‹[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T››*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Defined in [driver/basic/BasicCollectionReference.ts:42](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicCollectionReference.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *Promise‹[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T››*

___

###  doc

▸ **doc**(`id`: string): *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Defined in [driver/basic/BasicCollectionReference.ts:54](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicCollectionReference.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›*

___

###  endAt

▸ **endAt**<**U**>(`value`: U): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Inherited from [BasicQuery](_driver_basic_basicquery_.basicquery.md).[endAt](_driver_basic_basicquery_.basicquery.md#endat)*

*Defined in [driver/basic/BasicQuery.ts:69](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicQuery.ts#L69)*

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

*Inherited from [BasicQuery](_driver_basic_basicquery_.basicquery.md).[endBefore](_driver_basic_basicquery_.basicquery.md#endbefore)*

*Defined in [driver/basic/BasicQuery.ts:72](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicQuery.ts#L72)*

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

*Inherited from [BasicQuery](_driver_basic_basicquery_.basicquery.md).[get](_driver_basic_basicquery_.basicquery.md#get)*

*Defined in [driver/basic/BasicQuery.ts:97](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicQuery.ts#L97)*

**Returns:** *Promise‹[QuerySnapshot](../interfaces/_querysnapshot_.querysnapshot.md)‹T››*

___

###  limit

▸ **limit**(`limit`: number): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Inherited from [BasicQuery](_driver_basic_basicquery_.basicquery.md).[limit](_driver_basic_basicquery_.basicquery.md#limit)*

*Defined in [driver/basic/BasicQuery.ts:75](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicQuery.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *[Query](../interfaces/_query_.query.md)‹T›*

___

###  onSnapshot

▸ **onSnapshot**(`onNext`: function): *Promise‹Unsubscribe›*

*Inherited from [BasicQuery](_driver_basic_basicquery_.basicquery.md).[onSnapshot](_driver_basic_basicquery_.basicquery.md#onsnapshot)*

*Defined in [driver/basic/BasicQuery.ts:119](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicQuery.ts#L119)*

**Parameters:**

▪ **onNext**: *function*

▸ (`snapshot`: [QuerySnapshot](../interfaces/_querysnapshot_.querysnapshot.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`snapshot` | [QuerySnapshot](../interfaces/_querysnapshot_.querysnapshot.md)‹T› |

**Returns:** *Promise‹Unsubscribe›*

___

###  orderBy

▸ **orderBy**(`field`: string, `direction?`: [OrderDirection](../modules/_query_.md#orderdirection)): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Inherited from [BasicQuery](_driver_basic_basicquery_.basicquery.md).[orderBy](_driver_basic_basicquery_.basicquery.md#orderby)*

*Defined in [driver/basic/BasicQuery.ts:78](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicQuery.ts#L78)*

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

*Inherited from [BasicQuery](_driver_basic_basicquery_.basicquery.md).[startAfter](_driver_basic_basicquery_.basicquery.md#startafter)*

*Defined in [driver/basic/BasicQuery.ts:83](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicQuery.ts#L83)*

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

*Inherited from [BasicQuery](_driver_basic_basicquery_.basicquery.md).[startAt](_driver_basic_basicquery_.basicquery.md#startat)*

*Defined in [driver/basic/BasicQuery.ts:86](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicQuery.ts#L86)*

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

*Inherited from [BasicQuery](_driver_basic_basicquery_.basicquery.md).[where](_driver_basic_basicquery_.basicquery.md#where)*

*Defined in [driver/basic/BasicQuery.ts:89](https://github.com/esnya/nekostore/blob/de830f5/src/driver/basic/BasicQuery.ts#L89)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`field` | string |
`operator` | [WhereOperator](../modules/_query_.md#whereoperator) |
`value` | U |

**Returns:** *[Query](../interfaces/_query_.query.md)‹T›*
