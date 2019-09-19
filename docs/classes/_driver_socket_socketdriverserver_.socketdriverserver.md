[nekostore](../README.md) › [Globals](../globals.md) › ["driver/socket/SocketDriverServer"](../modules/_driver_socket_socketdriverserver_.md) › [SocketDriverServer](_driver_socket_socketdriverserver_.socketdriverserver.md)

# Class: SocketDriverServer

Server implementation for SocketDriver that mediates other drivers.

## Hierarchy

* **SocketDriverServer**

## Implements

* [Actions](../interfaces/_driver_socket_actions_.actions.md)

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

*Defined in [driver/socket/SocketDriverServer.ts:51](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDriverServer.ts#L51)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`driver` | [Driver](../interfaces/_driver_.driver.md) | Intermediary driver. |
`socket` | Socket | Socket that communicates with the client.  |

**Returns:** *[SocketDriverServer](_driver_socket_socketdriverserver_.socketdriverserver.md)*

## Properties

###  driver

• **driver**: *[Driver](../interfaces/_driver_.driver.md)*

*Defined in [driver/socket/SocketDriverServer.ts:91](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDriverServer.ts#L91)*

___

###  socket

• **socket**: *Socket*

*Defined in [driver/socket/SocketDriverServer.ts:92](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDriverServer.ts#L92)*

## Methods

###  collectionAdd

▸ **collectionAdd**<**T**>(`path`: string, `data`: T): *Promise‹object›*

*Defined in [driver/socket/SocketDriverServer.ts:168](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDriverServer.ts#L168)*

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

*Defined in [driver/socket/SocketDriverServer.ts:94](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDriverServer.ts#L94)*

**Returns:** *void*

___

###  documentDelete

▸ **documentDelete**<**T**>(`path`: string): *Promise‹void›*

*Implementation of [Actions](../interfaces/_driver_socket_actions_.actions.md)*

*Defined in [driver/socket/SocketDriverServer.ts:198](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDriverServer.ts#L198)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹void›*

___

###  documentGet

▸ **documentGet**<**T**>(`path`: string): *Promise‹object›*

*Implementation of [Actions](../interfaces/_driver_socket_actions_.actions.md)*

*Defined in [driver/socket/SocketDriverServer.ts:173](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDriverServer.ts#L173)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹object›*

___

###  documentSet

▸ **documentSet**<**T**>(`path`: string, `data`: T): *Promise‹void›*

*Defined in [driver/socket/SocketDriverServer.ts:190](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDriverServer.ts#L190)*

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

*Implementation of [Actions](../interfaces/_driver_socket_actions_.actions.md)*

*Defined in [driver/socket/SocketDriverServer.ts:202](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDriverServer.ts#L202)*

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

*Implementation of [Actions](../interfaces/_driver_socket_actions_.actions.md)*

*Defined in [driver/socket/SocketDriverServer.ts:194](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDriverServer.ts#L194)*

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

▸ **queryGet**<**T**>(`path`: string, `descriptors`: QueryDescriptor[]): *Promise‹[QuerySnapshotData](../interfaces/_driver_socket_actions_.querysnapshotdata.md)‹T››*

*Implementation of [Actions](../interfaces/_driver_socket_actions_.actions.md)*

*Defined in [driver/socket/SocketDriverServer.ts:98](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDriverServer.ts#L98)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`descriptors` | QueryDescriptor[] |

**Returns:** *Promise‹[QuerySnapshotData](../interfaces/_driver_socket_actions_.querysnapshotdata.md)‹T››*

___

###  querySubscribe

▸ **querySubscribe**<**T**>(`path`: string, `descriptors`: QueryDescriptor[]): *Promise‹object›*

*Implementation of [Actions](../interfaces/_driver_socket_actions_.actions.md)*

*Defined in [driver/socket/SocketDriverServer.ts:158](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDriverServer.ts#L158)*

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

*Implementation of [Actions](../interfaces/_driver_socket_actions_.actions.md)*

*Defined in [driver/socket/SocketDriverServer.ts:152](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/SocketDriverServer.ts#L152)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`subscriberId` | string |

**Returns:** *Promise‹void›*
