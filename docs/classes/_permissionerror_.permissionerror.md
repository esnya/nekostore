[nekostore](../README.md) › [Globals](../globals.md) › ["PermissionError"](../modules/_permissionerror_.md) › [PermissionError](_permissionerror_.permissionerror.md)

# Class: PermissionError

## Hierarchy

  ↳ [NekostoreError](_nekostoreerror_.nekostoreerror.md)

  ↳ **PermissionError**

## Index

### Constructors

* [constructor](_permissionerror_.permissionerror.md#constructor)

### Properties

* [code](_permissionerror_.permissionerror.md#code)
* [message](_permissionerror_.permissionerror.md#message)
* [name](_permissionerror_.permissionerror.md#name)
* [original](_permissionerror_.permissionerror.md#optional-original)

### Accessors

* [stack](_permissionerror_.permissionerror.md#stack)

## Constructors

###  constructor

\+ **new PermissionError**(`path`: string, `grant`: "read" | "write"): *[PermissionError](_permissionerror_.permissionerror.md)*

*Overrides [NekostoreError](_nekostoreerror_.nekostoreerror.md).[constructor](_nekostoreerror_.nekostoreerror.md#constructor)*

*Defined in [PermissionError.ts:3](https://github.com/esnya/nekostore/blob/master/src/PermissionError.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`grant` | "read" &#124; "write" |

**Returns:** *[PermissionError](_permissionerror_.permissionerror.md)*

## Properties

###  code

• **code**: *string*

*Inherited from [NekostoreError](_nekostoreerror_.nekostoreerror.md).[code](_nekostoreerror_.nekostoreerror.md#code)*

*Defined in [NekostoreError.ts:13](https://github.com/esnya/nekostore/blob/master/src/NekostoreError.ts#L13)*

___

###  message

• **message**: *string*

*Inherited from [NekostoreError](_nekostoreerror_.nekostoreerror.md).[message](_nekostoreerror_.nekostoreerror.md#message)*

*Overrides void*

*Defined in [NekostoreError.ts:14](https://github.com/esnya/nekostore/blob/master/src/NekostoreError.ts#L14)*

___

###  name

• **name**: *string*

*Inherited from void*

Defined in C:/Users/esnya/Documents/GitHub/nekostore/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` original

• **original**? : *Error*

*Inherited from [NekostoreError](_nekostoreerror_.nekostoreerror.md).[original](_nekostoreerror_.nekostoreerror.md#optional-original)*

*Defined in [NekostoreError.ts:15](https://github.com/esnya/nekostore/blob/master/src/NekostoreError.ts#L15)*

## Accessors

###  stack

• **get stack**(): *string | undefined*

*Inherited from [NekostoreError](_nekostoreerror_.nekostoreerror.md).[stack](_nekostoreerror_.nekostoreerror.md#stack)*

*Overrides void*

*Defined in [NekostoreError.ts:17](https://github.com/esnya/nekostore/blob/master/src/NekostoreError.ts#L17)*

**Returns:** *string | undefined*
