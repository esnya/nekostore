[nekostore](../README.md) › [Globals](../globals.md) › ["driver/socket/SocketCollectionReference"](../modules/_driver_socket_socketcollectionreference_.md) › [SocketCollectionReference](_driver_socket_socketcollectionreference_.socketcollectionreference.md)

# Class: SocketCollectionReference <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [SocketQuery](_driver_socket_socketquery_.socketquery.md)‹T›

  ↳ **SocketCollectionReference**

## Implements

* [Query](../interfaces/_query_.query.md)‹T›
* [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›

## Index

### Constructors

* [constructor](_driver_socket_socketcollectionreference_.socketcollectionreference.md#constructor)

### Properties

* [descriptors](_driver_socket_socketcollectionreference_.socketcollectionreference.md#descriptors)
* [driver](_driver_socket_socketcollectionreference_.socketcollectionreference.md#driver)
* [id](_driver_socket_socketcollectionreference_.socketcollectionreference.md#id)
* [parent](_driver_socket_socketcollectionreference_.socketcollectionreference.md#optional-parent)

### Accessors

* [path](_driver_socket_socketcollectionreference_.socketcollectionreference.md#path)

### Methods

* [add](_driver_socket_socketcollectionreference_.socketcollectionreference.md#add)
* [doc](_driver_socket_socketcollectionreference_.socketcollectionreference.md#doc)
* [endAt](_driver_socket_socketcollectionreference_.socketcollectionreference.md#endat)
* [endBefore](_driver_socket_socketcollectionreference_.socketcollectionreference.md#endbefore)
* [get](_driver_socket_socketcollectionreference_.socketcollectionreference.md#get)
* [limit](_driver_socket_socketcollectionreference_.socketcollectionreference.md#limit)
* [onSnapshot](_driver_socket_socketcollectionreference_.socketcollectionreference.md#onsnapshot)
* [orderBy](_driver_socket_socketcollectionreference_.socketcollectionreference.md#orderby)
* [startAfter](_driver_socket_socketcollectionreference_.socketcollectionreference.md#startafter)
* [startAt](_driver_socket_socketcollectionreference_.socketcollectionreference.md#startat)
* [where](_driver_socket_socketcollectionreference_.socketcollectionreference.md#where)

## Constructors

###  constructor

\+ **new SocketCollectionReference**(`driver`: SocketDriverSocket, `id`: string, `parent?`: [DocumentReference](../interfaces/_documentreference_.documentreference.md)‹any›): *[SocketCollectionReference](_driver_socket_socketcollectionreference_.socketcollectionreference.md)*

*Overrides [SocketQuery](_driver_socket_socketquery_.socketquery.md).[constructor](_driver_socket_socketquery_.socketquery.md#constructor)*

*Defined in [driver/socket/SocketCollectionReference.ts:8](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketCollectionReference.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`driver` | SocketDriverSocket |
`id` | string |
`parent?` | [DocumentReference](../interfaces/_documentreference_.documentreference.md)‹any› |

**Returns:** *[SocketCollectionReference](_driver_socket_socketcollectionreference_.socketcollectionreference.md)*

## Properties

###  descriptors

• **descriptors**: *QueryDescriptor[]*

*Inherited from [SocketQuery](_driver_socket_socketquery_.socketquery.md).[descriptors](_driver_socket_socketquery_.socketquery.md#descriptors)*

*Defined in [driver/socket/SocketQuery.ts:30](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L30)*

___

###  driver

• **driver**: *SocketDriverSocket*

*Inherited from [SocketQuery](_driver_socket_socketquery_.socketquery.md).[driver](_driver_socket_socketquery_.socketquery.md#driver)*

*Defined in [driver/socket/SocketQuery.ts:26](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L26)*

___

###  id

• **id**: *string*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md).[id](../interfaces/_collectionreference_.collectionreference.md#id)*

*Inherited from [SocketQuery](_driver_socket_socketquery_.socketquery.md).[id](_driver_socket_socketquery_.socketquery.md#id)*

*Defined in [driver/socket/SocketQuery.ts:27](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L27)*

___

### `Optional` parent

• **parent**? : *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹any›*

*Inherited from [SocketQuery](_driver_socket_socketquery_.socketquery.md).[parent](_driver_socket_socketquery_.socketquery.md#optional-parent)*

*Defined in [driver/socket/SocketQuery.ts:29](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L29)*

## Accessors

###  path

• **get path**(): *string*

*Inherited from [SocketQuery](_driver_socket_socketquery_.socketquery.md).[path](_driver_socket_socketquery_.socketquery.md#path)*

*Defined in [driver/socket/SocketQuery.ts:32](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L32)*

**Returns:** *string*

## Methods

###  add

▸ **add**(`data`: T): *Promise‹[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T››*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Defined in [driver/socket/SocketCollectionReference.ts:22](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketCollectionReference.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *Promise‹[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T››*

___

###  doc

▸ **doc**(`id`: string): *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Defined in [driver/socket/SocketCollectionReference.ts:18](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketCollectionReference.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›*

___

###  endAt

▸ **endAt**<**U**>(`value`: U): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Inherited from [SocketQuery](_driver_socket_socketquery_.socketquery.md).[endAt](_driver_socket_socketquery_.socketquery.md#endat)*

*Defined in [driver/socket/SocketQuery.ts:43](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L43)*

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

*Inherited from [SocketQuery](_driver_socket_socketquery_.socketquery.md).[endBefore](_driver_socket_socketquery_.socketquery.md#endbefore)*

*Defined in [driver/socket/SocketQuery.ts:46](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L46)*

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

*Inherited from [SocketQuery](_driver_socket_socketquery_.socketquery.md).[get](_driver_socket_socketquery_.socketquery.md#get)*

*Defined in [driver/socket/SocketQuery.ts:65](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L65)*

**Returns:** *Promise‹[QuerySnapshot](../interfaces/_querysnapshot_.querysnapshot.md)‹T››*

___

###  limit

▸ **limit**(`limit`: number): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [CollectionReference](../interfaces/_collectionreference_.collectionreference.md)*

*Inherited from [SocketQuery](_driver_socket_socketquery_.socketquery.md).[limit](_driver_socket_socketquery_.socketquery.md#limit)*

*Defined in [driver/socket/SocketQuery.ts:49](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *[Query](../interfaces/_query_.query.md)‹T›*

___

###  onSnapshot

▸ **onSnapshot**(`onNext`: function): *Promise‹Unsubscribe›*

*Inherited from [SocketQuery](_driver_socket_socketquery_.socketquery.md).[onSnapshot](_driver_socket_socketquery_.socketquery.md#onsnapshot)*

*Defined in [driver/socket/SocketQuery.ts:85](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L85)*

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

*Inherited from [SocketQuery](_driver_socket_socketquery_.socketquery.md).[orderBy](_driver_socket_socketquery_.socketquery.md#orderby)*

*Defined in [driver/socket/SocketQuery.ts:52](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L52)*

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

*Inherited from [SocketQuery](_driver_socket_socketquery_.socketquery.md).[startAfter](_driver_socket_socketquery_.socketquery.md#startafter)*

*Defined in [driver/socket/SocketQuery.ts:55](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L55)*

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

*Inherited from [SocketQuery](_driver_socket_socketquery_.socketquery.md).[startAt](_driver_socket_socketquery_.socketquery.md#startat)*

*Defined in [driver/socket/SocketQuery.ts:58](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L58)*

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

*Inherited from [SocketQuery](_driver_socket_socketquery_.socketquery.md).[where](_driver_socket_socketquery_.socketquery.md#where)*

*Defined in [driver/socket/SocketQuery.ts:61](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L61)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`field` | string |
`operator` | [WhereOperator](../modules/_query_.md#whereoperator) |
`value` | U |

**Returns:** *[Query](../interfaces/_query_.query.md)‹T›*
