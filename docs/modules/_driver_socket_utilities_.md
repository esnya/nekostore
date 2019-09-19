[nekostore](../README.md) › [Globals](../globals.md) › ["driver/socket/utilities"](_driver_socket_utilities_.md)

# External module: "driver/socket/utilities"

## Index

### Functions

* [getCollection](_driver_socket_utilities_.md#getcollection)
* [getDoc](_driver_socket_utilities_.md#getdoc)
* [getQuery](_driver_socket_utilities_.md#getquery)

## Functions

###  getCollection

▸ **getCollection**<**T**>(`driver`: [Driver](../interfaces/_driver_.driver.md), `path`: string): *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*

*Defined in [driver/socket/utilities.ts:9](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/utilities.ts#L9)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`driver` | [Driver](../interfaces/_driver_.driver.md) |
`path` | string |

**Returns:** *[CollectionReference](../interfaces/_collectionreference_.collectionreference.md)‹T›*

___

###  getDoc

▸ **getDoc**<**T**>(`driver`: [Driver](../interfaces/_driver_.driver.md), `path`: string): *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›*

*Defined in [driver/socket/utilities.ts:57](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/utilities.ts#L57)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`driver` | [Driver](../interfaces/_driver_.driver.md) |
`path` | string |

**Returns:** *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›*

___

###  getQuery

▸ **getQuery**<**T**>(`driver`: [Driver](../interfaces/_driver_.driver.md), `path`: string, `descriptors`: QueryDescriptor[]): *[Query](../interfaces/_query_.query.md)‹T›*

*Defined in [driver/socket/utilities.ts:29](https://github.com/esnya/nekostore/blob/de830f5/src/driver/socket/utilities.ts#L29)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`driver` | [Driver](../interfaces/_driver_.driver.md) |
`path` | string |
`descriptors` | QueryDescriptor[] |

**Returns:** *[Query](../interfaces/_query_.query.md)‹T›*
