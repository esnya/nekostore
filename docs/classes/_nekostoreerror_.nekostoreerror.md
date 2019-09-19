[nekostore](../README.md) › [Globals](../globals.md) › ["NekostoreError"](../modules/_nekostoreerror_.md) › [NekostoreError](_nekostoreerror_.nekostoreerror.md)

# Class: NekostoreError

## Hierarchy

* Error

  ↳ **NekostoreError**

  ↳ [NotFoundError](_notfounderror_.notfounderror.md)

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

*Defined in [NekostoreError.ts:1](https://github.com/esnya/nekostore/blob/4486881/src/NekostoreError.ts#L1)*

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

*Defined in [NekostoreError.ts:10](https://github.com/esnya/nekostore/blob/4486881/src/NekostoreError.ts#L10)*

___

###  message

• **message**: *string*

*Overrides void*

*Defined in [NekostoreError.ts:11](https://github.com/esnya/nekostore/blob/4486881/src/NekostoreError.ts#L11)*

___

###  name

• **name**: *string*

*Inherited from void*

Defined in C:/Users/esnya/Documents/GitHub/nekostore/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` original

• **original**? : *Error*

*Defined in [NekostoreError.ts:12](https://github.com/esnya/nekostore/blob/4486881/src/NekostoreError.ts#L12)*

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in C:/Users/esnya/Documents/GitHub/nekostore/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:984

## Accessors

###  stack

• **get stack**(): *string | undefined*

*Overrides void*

*Defined in [NekostoreError.ts:14](https://github.com/esnya/nekostore/blob/4486881/src/NekostoreError.ts#L14)*

**Returns:** *string | undefined*
