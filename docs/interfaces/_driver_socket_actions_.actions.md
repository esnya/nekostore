[nekostore](../README.md) › [Globals](../globals.md) › ["driver/socket/Actions"](../modules/_driver_socket_actions_.md) › [Actions](_driver_socket_actions_.actions.md)

# Interface: Actions

## Hierarchy

* **Actions**

## Implemented by

* [SocketDriverServer](../classes/_driver_socket_socketdriverserver_.socketdriverserver.md)

## Index

### Methods

* [collectionAdd](_driver_socket_actions_.actions.md#collectionadd)
* [documentDelete](_driver_socket_actions_.actions.md#documentdelete)
* [documentGet](_driver_socket_actions_.actions.md#documentget)
* [documentSet](_driver_socket_actions_.actions.md#documentset)
* [documentSubscribe](_driver_socket_actions_.actions.md#documentsubscribe)
* [documentUpdate](_driver_socket_actions_.actions.md#documentupdate)
* [queryGet](_driver_socket_actions_.actions.md#queryget)
* [querySubscribe](_driver_socket_actions_.actions.md#querysubscribe)
* [unsubscribe](_driver_socket_actions_.actions.md#unsubscribe)

## Methods

###  collectionAdd

▸ **collectionAdd**<**T**>(`path`: string, `data`: T): *Promise‹object›*

*Defined in [driver/socket/Actions.ts:27](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/Actions.ts#L27)*

**Type parameters:**

▪ **T**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`data` | T |

**Returns:** *Promise‹object›*

___

###  documentDelete

▸ **documentDelete**<**T**>(`path`: string): *Promise‹void›*

*Defined in [driver/socket/Actions.ts:34](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/Actions.ts#L34)*

**Type parameters:**

▪ **T**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹void›*

___

###  documentGet

▸ **documentGet**<**T**>(`path`: string): *Promise‹object›*

*Defined in [driver/socket/Actions.ts:29](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/Actions.ts#L29)*

**Type parameters:**

▪ **T**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹object›*

___

###  documentSet

▸ **documentSet**<**T**>(`path`: string, `data`: T): *Promise‹void›*

*Defined in [driver/socket/Actions.ts:32](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/Actions.ts#L32)*

**Type parameters:**

▪ **T**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`data` | T |

**Returns:** *Promise‹void›*

___

###  documentSubscribe

▸ **documentSubscribe**<**T**>(`path`: string): *Promise‹object›*

*Defined in [driver/socket/Actions.ts:35](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/Actions.ts#L35)*

**Type parameters:**

▪ **T**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹object›*

___

###  documentUpdate

▸ **documentUpdate**<**T**>(`path`: string, `data`: Partial‹T›): *Promise‹void›*

*Defined in [driver/socket/Actions.ts:33](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/Actions.ts#L33)*

**Type parameters:**

▪ **T**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`data` | Partial‹T› |

**Returns:** *Promise‹void›*

___

###  queryGet

▸ **queryGet**<**T**>(`path`: string, `descriptors`: QueryDescriptor[]): *Promise‹[QuerySnapshotData](_driver_socket_actions_.querysnapshotdata.md)‹T››*

*Defined in [driver/socket/Actions.ts:18](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/Actions.ts#L18)*

**Type parameters:**

▪ **T**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`descriptors` | QueryDescriptor[] |

**Returns:** *Promise‹[QuerySnapshotData](_driver_socket_actions_.querysnapshotdata.md)‹T››*

___

###  querySubscribe

▸ **querySubscribe**(`path`: string, `descriptors`: QueryDescriptor[]): *Promise‹object›*

*Defined in [driver/socket/Actions.ts:22](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/Actions.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`descriptors` | QueryDescriptor[] |

**Returns:** *Promise‹object›*

___

###  unsubscribe

▸ **unsubscribe**(`subscriberId`: string): *Promise‹void›*

*Defined in [driver/socket/Actions.ts:39](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/Actions.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`subscriberId` | string |

**Returns:** *Promise‹void›*
