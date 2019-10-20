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

*Defined in [driver/socket/SocketDriverServer.ts:46](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L46)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`driver` | [Driver](../interfaces/_driver_.driver.md) | Intermediary driver. |
`socket` | Socket | Socket that communicates with the client.  |

**Returns:** *[SocketDriverServer](_driver_socket_socketdriverserver_.socketdriverserver.md)*

## Properties

###  driver

• **driver**: *[Driver](../interfaces/_driver_.driver.md)*

*Defined in [driver/socket/SocketDriverServer.ts:86](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L86)*

___

###  socket

• **socket**: *Socket*

*Defined in [driver/socket/SocketDriverServer.ts:87](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L87)*

## Methods

###  collectionAdd

▸ **collectionAdd**<**T**>(`path`: string, `data`: T): *Promise‹object›*

*Defined in [driver/socket/SocketDriverServer.ts:157](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L157)*

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

*Defined in [driver/socket/SocketDriverServer.ts:89](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L89)*

**Returns:** *void*

___

###  documentDelete

▸ **documentDelete**<**T**>(`path`: string): *Promise‹void›*

*Defined in [driver/socket/SocketDriverServer.ts:176](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L176)*

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

*Defined in [driver/socket/SocketDriverServer.ts:162](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L162)*

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

*Defined in [driver/socket/SocketDriverServer.ts:168](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L168)*

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

*Defined in [driver/socket/SocketDriverServer.ts:180](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L180)*

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

*Defined in [driver/socket/SocketDriverServer.ts:172](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L172)*

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

*Defined in [driver/socket/SocketDriverServer.ts:93](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L93)*

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

*Defined in [driver/socket/SocketDriverServer.ts:147](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L147)*

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

*Defined in [driver/socket/SocketDriverServer.ts:141](https://github.com/esnya/nekostore/blob/master/src/driver/socket/SocketDriverServer.ts#L141)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`subscriberId` | string |

**Returns:** *Promise‹void›*
