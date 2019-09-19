[nekostore](../README.md) › [Globals](../globals.md) › ["NekostoreError"](../modules/_nekostoreerror_.md) › [NekostoreError](_nekostoreerror_.nekostoreerror.md)

# Class: NekostoreError

Error class with error-code.

## Hierarchy

* Error

  ↳ **NekostoreError**

  ↳ [NotFoundError](_notfounderror_.notfounderror.md)

  ↳ [PermissionError](_permissionerror_.permissionerror.md)

## Index

### Constructors

* [constructor](_nekostoreerror_.nekostoreerror.md#constructor)

### Properties

* [code](_nekostoreerror_.nekostoreerror.md#code)
* [message](_nekostoreerror_.nekostoreerror.md#message)
* [name](_nekostoreerror_.nekostoreerror.md#name)
* [original](_nekostoreerror_.nekostoreerror.md#optional-original)
* [Error](_nekostoreerror_.nekostoreerror.md#static-error)

### Accessors

* [stack](_nekostoreerror_.nekostoreerror.md#stack)

## Constructors

###  constructor

\+ **new NekostoreError**(`code`: string, `message`: string, `original?`: Error): *[NekostoreError](_nekostoreerror_.nekostoreerror.md)*

*Defined in [NekostoreError.ts:4](https://github.com/esnya/nekostore/blob/master/src/NekostoreError.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |
`message` | string |
`original?` | Error |

**Returns:** *[NekostoreError](_nekostoreerror_.nekostoreerror.md)*

## Properties

###  code

• **code**: *string*

*Defined in [NekostoreError.ts:13](https://github.com/esnya/nekostore/blob/master/src/NekostoreError.ts#L13)*

___

###  message

• **message**: *string*

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

*Defined in [NekostoreError.ts:15](https://github.com/esnya/nekostore/blob/master/src/NekostoreError.ts#L15)*

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in C:/Users/esnya/Documents/GitHub/nekostore/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:984

## Accessors

###  stack

• **get stack**(): *string | undefined*

*Overrides void*

*Defined in [NekostoreError.ts:17](https://github.com/esnya/nekostore/blob/master/src/NekostoreError.ts#L17)*

**Returns:** *string | undefined*
