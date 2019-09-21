[nekostore](../README.md) › [Globals](../globals.md) › ["vue/decorators/utilities"](_vue_decorators_utilities_.md)

# External module: "vue/decorators/utilities"

## Index

### Interfaces

* [VueWithCreated](../interfaces/_vue_decorators_utilities_.vuewithcreated.md)

### Type aliases

* [PropertyNamesOf](_vue_decorators_utilities_.md#propertynamesof)

### Functions

* [chainMethod](_vue_decorators_utilities_.md#chainmethod)

## Type aliases

###  PropertyNamesOf

Ƭ **PropertyNamesOf**: *{ [K in keyof T]: T[K] extends U ? K : never; }[keyof T]*

Defined in vue/decorators/utilities.ts:8

## Functions

###  chainMethod

▸ **chainMethod**<**T**, **Key**, **U**>(`target`: T, `key`: Key, `method`: U): *void*

Defined in vue/decorators/utilities.ts:12

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
