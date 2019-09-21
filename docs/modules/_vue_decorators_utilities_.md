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

*Defined in [vue/decorators/utilities.ts:16](https://github.com/esnya/nekostore/blob/master/src/vue/decorators/utilities.ts#L16)*

## Functions

###  chainMethod

▸ **chainMethod**<**T**, **Key**, **U**>(`target`: T, `key`: Key, `method`: U): *void*

*Defined in [vue/decorators/utilities.ts:20](https://github.com/esnya/nekostore/blob/master/src/vue/decorators/utilities.ts#L20)*

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

▸ **decoratorFactory**<**V**, **T**, **U**, **W**>(`refKey`: [PropertyNamesOf](_vue_decorators_utilities_.md#propertynamesof)‹U, V›, `onSnapshot`: function, `get`: boolean): *VueDecorator*

*Defined in [vue/decorators/utilities.ts:44](https://github.com/esnya/nekostore/blob/master/src/vue/decorators/utilities.ts#L44)*

**Type parameters:**

▪ **V**: *[DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T› | [Query](../interfaces/_query_.query.md)‹T›*

▪ **T**: *__type*

▪ **U**: *[VueWithCreated](../interfaces/_vue_decorators_utilities_.vuewithcreated.md)*

▪ **W**: *[DocumentSnapshot](../interfaces/_documentsnapshot_.documentsnapshot.md)‹T› | [QuerySnapshot](../interfaces/_querysnapshot_.querysnapshot.md)‹T›*

**Parameters:**

▪ **refKey**: *[PropertyNamesOf](_vue_decorators_utilities_.md#propertynamesof)‹U, V›*

▪ **onSnapshot**: *function*

▸ (`snapshot`: W, `data?`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`snapshot` | W |
`data?` | any |

▪ **get**: *boolean*

**Returns:** *VueDecorator*
