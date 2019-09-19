[nekostore](../README.md) › [Globals](../globals.md) › ["Query"](../modules/_query_.md) › [Query](_query_.query.md)

# Interface: Query <**T**>

Query of the collection reference.

## Type parameters

▪ **T**

## Hierarchy

* **Query**

  ↳ [CollectionReference](_collectionreference_.collectionreference.md)

## Index

### Methods

* [endAt](_query_.query.md#endat)
* [endBefore](_query_.query.md#endbefore)
* [get](_query_.query.md#get)
* [limit](_query_.query.md#limit)
* [onSnapshot](_query_.query.md#onsnapshot)
* [orderBy](_query_.query.md#orderby)
* [startAfter](_query_.query.md#startafter)
* [startAt](_query_.query.md#startat)
* [where](_query_.query.md#where)

## Methods

###  endAt

▸ **endAt**<**U**>(`value`: U): *[Query](_query_.query.md)‹T›*

*Defined in [Query.ts:22](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L22)*

Specify end poisiton by field value. Use after orderBy.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | U | Value of field specified wity orderBy.  |

**Returns:** *[Query](_query_.query.md)‹T›*

___

###  endBefore

▸ **endBefore**<**U**>(`value`: U): *[Query](_query_.query.md)‹T›*

*Defined in [Query.ts:28](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L28)*

Specify end poisiton by field value. Use after orderBy.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | U | Value of field specified wity orderBy.  |

**Returns:** *[Query](_query_.query.md)‹T›*

___

###  get

▸ **get**(): *Promise‹[QuerySnapshot](_querysnapshot_.querysnapshot.md)‹T››*

*Defined in [Query.ts:58](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L58)*

Get a snapshot of the query.

**Returns:** *Promise‹[QuerySnapshot](_querysnapshot_.querysnapshot.md)‹T››*

___

###  limit

▸ **limit**(`limit`: number): *[Query](_query_.query.md)‹T›*

*Defined in [Query.ts:45](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L45)*

Limit number of documents.

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *[Query](_query_.query.md)‹T›*

___

###  onSnapshot

▸ **onSnapshot**(`onNext`: function): *Promise‹Unsubscribe›*

*Defined in [Query.ts:65](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L65)*

Receive snapshots of the query when updated.

**Parameters:**

▪ **onNext**: *function*

▸ (`snapshot`: [QuerySnapshot](_querysnapshot_.querysnapshot.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`snapshot` | [QuerySnapshot](_querysnapshot_.querysnapshot.md)‹T› |

**Returns:** *Promise‹Unsubscribe›*

Function to unsubscribe.

___

###  orderBy

▸ **orderBy**(`field`: string, `direction?`: [OrderDirection](../modules/_query_.md#orderdirection)): *[Query](_query_.query.md)‹T›*

*Defined in [Query.ts:16](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L16)*

Sort documents.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`field` | string | Path for the field seperated by '.'. |
`direction?` | [OrderDirection](../modules/_query_.md#orderdirection) | Order direction e.g. 'asc', 'desc'.  |

**Returns:** *[Query](_query_.query.md)‹T›*

___

###  startAfter

▸ **startAfter**<**U**>(`value`: U): *[Query](_query_.query.md)‹T›*

*Defined in [Query.ts:34](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L34)*

Specify start poisiton by field value. Use after orderBy.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | U | Value of field specified wity orderBy.  |

**Returns:** *[Query](_query_.query.md)‹T›*

___

###  startAt

▸ **startAt**<**U**>(`value`: U): *[Query](_query_.query.md)‹T›*

*Defined in [Query.ts:40](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L40)*

Specify start poisiton by field value. Use after orderBy.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | U | Value of field specified wity orderBy.  |

**Returns:** *[Query](_query_.query.md)‹T›*

___

###  where

▸ **where**<**U**>(`field`: string, `operator`: [WhereOperator](../modules/_query_.md#whereoperator), `value`: U): *[Query](_query_.query.md)‹T›*

*Defined in [Query.ts:53](https://github.com/esnya/nekostore/blob/4486881/src/Query.ts#L53)*

Filter documents by specified operator.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`field` | string | Path for the field separated by '.'. |
`operator` | [WhereOperator](../modules/_query_.md#whereoperator) | Operator for compararison e.g. '==', '<', '<=', '>', '>=' |
`value` | U | Rvalue for comparison.  |

**Returns:** *[Query](_query_.query.md)‹T›*
