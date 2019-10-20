[nekostore](../README.md) › [Globals](../globals.md) › ["vue/decorators/utilities"](_vue_decorators_utilities_.md)

# External module: "vue/decorators/utilities"

## Index

### Interfaces

* [VueWithCreated](../interfaces/_vue_decorators_utilities_.vuewithcreated.md)

### Type aliases

* [PropertyNamesOf](_vue_decorators_utilities_.md#propertynamesof)

### Functions

* [chainMethod](_vue_decorators_utilities_.md#chainmethod)
* [decoratorFactory](_vue_decorators_utilities_.md#decoratorfactory)

## Type aliases

###  PropertyNamesOf

Ƭ **PropertyNamesOf**: *{ [K in keyof T]: T[K] extends U ? K : never; }[keyof T]*

*Defined in [vue/decorators/utilities.ts:17](https://github.com/esnya/nekostore/blob/master/src/vue/decorators/utilities.ts#L17)*

## Functions

###  chainMethod

▸ **chainMethod**<**T**, **Key**, **U**>(`target`: T, `key`: Key, `method`: U): *void*

*Defined in [vue/decorators/utilities.ts:21](https://github.com/esnya/nekostore/blob/master/src/vue/decorators/utilities.ts#L21)*

**Type parameters:**

▪ **T**

▪ **Key**: *keyof T*

▪ **U**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |
`key` | Key |
`method` | U |

**Returns:** *void*

___

###  decoratorFactory

▸ **decoratorFactory**<**V**, **T**, **U**, **X**>(`refKey`: [PropertyNamesOf](_vue_decorators_utilities_.md#propertynamesof)‹U, V›, `onSnapshot`: function, `get`: boolean): *VueDecorator*

*Defined in [vue/decorators/utilities.ts:50](https://github.com/esnya/nekostore/blob/master/src/vue/decorators/utilities.ts#L50)*

**Type parameters:**

▪ **V**: *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T› | [Query](../interfaces/_query_.query.md)‹T›*

▪ **T**: *__type*

▪ **U**: *[VueWithCreated](../interfaces/_vue_decorators_utilities_.vuewithcreated.md)*

▪ **X**: *T | [NonEmptyDocumentSnapshot](../interfaces/_documentsnapshot_.nonemptydocumentsnapshot.md)‹T›[]*

**Parameters:**

▪ **refKey**: *[PropertyNamesOf](_vue_decorators_utilities_.md#propertynamesof)‹U, V›*

▪ **onSnapshot**: *function*

▸ (`snapshot`: [SnapshotOf](_types_.md#snapshotof)‹V›, `data?`: any): *X*

**Parameters:**

Name | Type |
------ | ------ |
`snapshot` | [SnapshotOf](_types_.md#snapshotof)‹V› |
`data?` | any |

▪ **get**: *boolean*

**Returns:** *VueDecorator*
