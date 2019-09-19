[nekostore](../README.md) › [Globals](../globals.md) › ["driver/socket/SocketQuery"](../modules/_driver_socket_socketquery_.md) › [SocketQuery](_driver_socket_socketquery_.socketquery.md)

# Class: SocketQuery <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **SocketQuery**

  ↳ [SocketCollectionReference](_driver_socket_socketcollectionreference_.socketcollectionreference.md)

## Implements

* [Query](../interfaces/_query_.query.md)‹T›

## Index

### Constructors

* [constructor](_driver_socket_socketquery_.socketquery.md#constructor)

### Properties

* [descriptors](_driver_socket_socketquery_.socketquery.md#descriptors)
* [driver](_driver_socket_socketquery_.socketquery.md#driver)
* [id](_driver_socket_socketquery_.socketquery.md#id)
* [parent](_driver_socket_socketquery_.socketquery.md#optional-parent)

### Accessors

* [path](_driver_socket_socketquery_.socketquery.md#path)

### Methods

* [endAt](_driver_socket_socketquery_.socketquery.md#endat)
* [endBefore](_driver_socket_socketquery_.socketquery.md#endbefore)
* [get](_driver_socket_socketquery_.socketquery.md#get)
* [limit](_driver_socket_socketquery_.socketquery.md#limit)
* [onSnapshot](_driver_socket_socketquery_.socketquery.md#onsnapshot)
* [orderBy](_driver_socket_socketquery_.socketquery.md#orderby)
* [startAfter](_driver_socket_socketquery_.socketquery.md#startafter)
* [startAt](_driver_socket_socketquery_.socketquery.md#startat)
* [where](_driver_socket_socketquery_.socketquery.md#where)

## Constructors

###  constructor

\+ **new SocketQuery**(`driver`: SocketDriverSocket, `id`: string, `parent?`: [DocumentReference](../interfaces/_documentreference_.documentreference.md)‹any›, `descriptors`: QueryDescriptor[]): *[SocketQuery](_driver_socket_socketquery_.socketquery.md)*

*Defined in [driver/socket/SocketQuery.ts:12](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L12)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`driver` | SocketDriverSocket | - |
`id` | string | - |
`parent?` | [DocumentReference](../interfaces/_documentreference_.documentreference.md)‹any› | - |
`descriptors` | QueryDescriptor[] |  [] |

**Returns:** *[SocketQuery](_driver_socket_socketquery_.socketquery.md)*

## Properties

###  descriptors

• **descriptors**: *QueryDescriptor[]*

*Defined in [driver/socket/SocketQuery.ts:30](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L30)*

___

###  driver

• **driver**: *SocketDriverSocket*

*Defined in [driver/socket/SocketQuery.ts:26](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L26)*

___

###  id

• **id**: *string*

*Defined in [driver/socket/SocketQuery.ts:27](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L27)*

___

### `Optional` parent

• **parent**? : *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹any›*

*Defined in [driver/socket/SocketQuery.ts:29](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L29)*

## Accessors

###  path

• **get path**(): *string*

*Defined in [driver/socket/SocketQuery.ts:32](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L32)*

**Returns:** *string*

## Methods

###  endAt

▸ **endAt**<**U**>(`value`: U): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [Query](../interfaces/_query_.query.md)*

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

*Implementation of [Query](../interfaces/_query_.query.md)*

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

*Implementation of [Query](../interfaces/_query_.query.md)*

*Defined in [driver/socket/SocketQuery.ts:65](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L65)*

**Returns:** *Promise‹[QuerySnapshot](../interfaces/_querysnapshot_.querysnapshot.md)‹T››*

___

###  limit

▸ **limit**(`limit`: number): *[Query](../interfaces/_query_.query.md)‹T›*

*Implementation of [Query](../interfaces/_query_.query.md)*

*Defined in [driver/socket/SocketQuery.ts:49](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketQuery.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *[Query](../interfaces/_query_.query.md)‹T›*

___

###  onSnapshot

▸ **onSnapshot**(`onNext`: function): *Promise‹Unsubscribe›*

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

*Implementation of [Query](../interfaces/_query_.query.md)*

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

*Implementation of [Query](../interfaces/_query_.query.md)*

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

*Implementation of [Query](../interfaces/_query_.query.md)*

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

*Implementation of [Query](../interfaces/_query_.query.md)*

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
