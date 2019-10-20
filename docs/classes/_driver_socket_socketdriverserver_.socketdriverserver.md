[nekostore](../README.md) › [Globals](../globals.md) › ["driver/socket/SocketDriverServer"](../modules/_driver_socket_socketdriverserver_.md) › [SocketDriverServer](_driver_socket_socketdriverserver_.socketdriverserver.md)

# Class: SocketDriverServer

Server implementation for SocketDriver that mediates other drivers.

## Hierarchy

* **SocketDriverServer**

## Implements

* Actions

## Index

### Constructors

* [constructor](_driver_socket_socketdriverserver_.socketdriverserver.md#constructor)

### Properties

* [driver](_driver_socket_socketdriverserver_.socketdriverserver.md#driver)
* [socket](_driver_socket_socketdriverserver_.socketdriverserver.md#socket)

### Methods

* [collectionAdd](_driver_socket_socketdriverserver_.socketdriverserver.md#collectionadd)
* [destroy](_driver_socket_socketdriverserver_.socketdriverserver.md#destroy)
* [documentDelete](_driver_socket_socketdriverserver_.socketdriverserver.md#documentdelete)
* [documentGet](_driver_socket_socketdriverserver_.socketdriverserver.md#documentget)
* [documentSet](_driver_socket_socketdriverserver_.socketdriverserver.md#documentset)
* [documentSubscribe](_driver_socket_socketdriverserver_.socketdriverserver.md#documentsubscribe)
* [documentUpdate](_driver_socket_socketdriverserver_.socketdriverserver.md#documentupdate)
* [queryGet](_driver_socket_socketdriverserver_.socketdriverserver.md#queryget)
* [querySubscribe](_driver_socket_socketdriverserver_.socketdriverserver.md#querysubscribe)
* [unsubscribe](_driver_socket_socketdriverserver_.socketdriverserver.md#unsubscribe)

## Constructors

###  constructor

\+ **new SocketDriverServer**(`driver`: [Driver](../interfaces/_driver_.driver.md), `socket`: Socket): *[SocketDriverServer](_driver_socket_socketdriverserver_.socketdriverserver.md)*

*Defined in [driver/socket/SocketDriverServer.ts:47](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L47)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`driver` | [Driver](../interfaces/_driver_.driver.md) | Intermediary driver. |
`socket` | Socket | Socket that communicates with the client.  |

**Returns:** *[SocketDriverServer](_driver_socket_socketdriverserver_.socketdriverserver.md)*

## Properties

###  driver

• **driver**: *[Driver](../interfaces/_driver_.driver.md)*

*Defined in [driver/socket/SocketDriverServer.ts:87](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L87)*

___

###  socket

• **socket**: *Socket*

*Defined in [driver/socket/SocketDriverServer.ts:88](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L88)*

## Methods

###  collectionAdd

▸ **collectionAdd**<**T**>(`path`: string, `data`: T): *Promise‹object›*

*Defined in [driver/socket/SocketDriverServer.ts:160](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L160)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`data` | T |

**Returns:** *Promise‹object›*

___

###  destroy

▸ **destroy**(): *void*

*Defined in [driver/socket/SocketDriverServer.ts:90](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L90)*

**Returns:** *void*

___

###  documentDelete

▸ **documentDelete**<**T**>(`path`: string): *Promise‹void›*

*Defined in [driver/socket/SocketDriverServer.ts:179](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L179)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹void›*

___

###  documentGet

▸ **documentGet**<**T**>(`path`: string): *Promise‹T | undefined›*

*Defined in [driver/socket/SocketDriverServer.ts:165](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L165)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹T | undefined›*

___

###  documentSet

▸ **documentSet**<**T**>(`path`: string, `data`: T): *Promise‹void›*

*Defined in [driver/socket/SocketDriverServer.ts:171](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L171)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`data` | T |

**Returns:** *Promise‹void›*

___

###  documentSubscribe

▸ **documentSubscribe**<**T**>(`path`: string): *Promise‹object›*

*Defined in [driver/socket/SocketDriverServer.ts:183](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L183)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹object›*

___

###  documentUpdate

▸ **documentUpdate**<**T**>(`path`: string, `data`: Partial‹T›): *Promise‹void›*

*Defined in [driver/socket/SocketDriverServer.ts:175](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L175)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`data` | Partial‹T› |

**Returns:** *Promise‹void›*

___

###  queryGet

▸ **queryGet**<**T**>(`path`: string, `descriptors`: QueryDescriptor[]): *Promise‹QuerySnapshotData‹T››*

*Defined in [driver/socket/SocketDriverServer.ts:94](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L94)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`descriptors` | QueryDescriptor[] |

**Returns:** *Promise‹QuerySnapshotData‹T››*

___

###  querySubscribe

▸ **querySubscribe**<**T**>(`path`: string, `descriptors`: QueryDescriptor[]): *Promise‹object›*

*Defined in [driver/socket/SocketDriverServer.ts:150](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L150)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`descriptors` | QueryDescriptor[] |

**Returns:** *Promise‹object›*

___

###  unsubscribe

▸ **unsubscribe**<**T**>(`subscriberId`: string): *Promise‹void›*

*Defined in [driver/socket/SocketDriverServer.ts:142](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L142)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`subscriberId` | string |

**Returns:** *Promise‹void›*
