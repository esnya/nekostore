[nekostore](../README.md) › [Globals](../globals.md) › ["driver/socket/SocketDriver"](../modules/_driver_socket_socketdriver_.md) › [SocketDriver](_driver_socket_socketdriver_.socketdriver.md)

# Class: SocketDriver

Driver implementation that connects to a remote Nekostore via a socket (e.g. Socket.io).

## Hierarchy

* **SocketDriver**

## Implements

* [Driver](../interfaces/_driver_.driver.md)

## Index

### Constructors

* [constructor](_driver_socket_socketdriver_.socketdriver.md#constructor)

### Properties

* [socket](_driver_socket_socketdriver_.socketdriver.md#socket)
* [timeout](_driver_socket_socketdriver_.socketdriver.md#timeout)

### Methods

* [collection](_driver_socket_socketdriver_.socketdriver.md#collection)
* [request](_driver_socket_socketdriver_.socketdriver.md#request)

## Constructors

###  constructor

\+ **new SocketDriver**(`options`: [Options](../interfaces/_driver_socket_socketdriver_.options.md)): *[SocketDriver](_driver_socket_socketdriver_.socketdriver.md)*

*Defined in [driver/socket/SocketDriver.ts:24](https://github.com/esnya/nekostore/blob/f2443c4/src/driver/socket/SocketDriver.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [Options](../interfaces/_driver_socket_socketdriver_.options.md) |

**Returns:** *[SocketDriver](_driver_socket_socketdriver_.socketdriver.md)*

## Properties

###  socket

• **socket**: *Socket*

*Defined in [driver/socket/SocketDriver.ts:30](https://github.com/esnya/nekostore/blob/f2443c4/src/driver/socket/SocketDriver.ts#L30)*

___

###  timeout

• **timeout**: *number*

*Defined in [driver/socket/SocketDriver.ts:31](https://github.com/esnya/nekostore/blob/f2443c4/src/driver/socket/SocketDriver.ts#L31)*

## Methods

###  collection

▸ **collection**<**T**>(`id`: string): *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*

*Implementation of [Driver](../interfaces/_driver_.driver.md)*

*Defined in [driver/socket/SocketDriver.ts:33](https://github.com/esnya/nekostore/blob/f2443c4/src/driver/socket/SocketDriver.ts#L33)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*

___

###  request

▸ **request**<**Action**>(`action`: Action, ...`args`: ActionArgsOf‹Action›): *Promise‹ActionReturnTypeOf‹Action››*

*Defined in [driver/socket/SocketDriver.ts:37](https://github.com/esnya/nekostore/blob/f2443c4/src/driver/socket/SocketDriver.ts#L37)*

**Type parameters:**

▪ **Action**: *ActionNames*

**Parameters:**

Name | Type |
------ | ------ |
`action` | Action |
`...args` | ActionArgsOf‹Action› |

**Returns:** *Promise‹ActionReturnTypeOf‹Action››*
