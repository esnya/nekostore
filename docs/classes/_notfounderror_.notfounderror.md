[nekostore](../README.md) › [Globals](../globals.md) › ["NotFoundError"](../modules/_notfounderror_.md) › [NotFoundError](_notfounderror_.notfounderror.md)

# Class: NotFoundError

## Hierarchy

  ↳ [NekostoreError](_nekostoreerror_.nekostoreerror.md)

  ↳ **NotFoundError**

## Index

### Constructors

* [constructor](_notfounderror_.notfounderror.md#constructor)

### Properties

* [code](_notfounderror_.notfounderror.md#code)
* [message](_notfounderror_.notfounderror.md#message)
* [name](_notfounderror_.notfounderror.md#name)
* [original](_notfounderror_.notfounderror.md#optional-original)

### Accessors

* [stack](_notfounderror_.notfounderror.md#stack)

## Constructors

###  constructor

\+ **new NotFoundError**(`message`: string, `original?`: Error): *[NotFoundError](_notfounderror_.notfounderror.md)*

*Overrides [NekostoreError](_nekostoreerror_.nekostoreerror.md).[constructor](_nekostoreerror_.nekostoreerror.md#constructor)*

*Defined in [NotFoundError.ts:3](https://github.com/esnya/nekostore/blob/99eadde/src/NotFoundError.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`original?` | Error |

**Returns:** *[NotFoundError](_notfounderror_.notfounderror.md)*

## Properties

###  code

• **code**: *string*

*Inherited from [NekostoreError](_nekostoreerror_.nekostoreerror.md).[code](_nekostoreerror_.nekostoreerror.md#code)*

*Defined in [NekostoreError.ts:13](https://github.com/esnya/nekostore/blob/99eadde/src/NekostoreError.ts#L13)*

___

###  message

• **message**: *string*

*Inherited from [NekostoreError](_nekostoreerror_.nekostoreerror.md).[message](_nekostoreerror_.nekostoreerror.md#message)*

*Overrides void*

*Defined in [NekostoreError.ts:14](https://github.com/esnya/nekostore/blob/99eadde/src/NekostoreError.ts#L14)*

___

###  name

• **name**: *string*

*Inherited from void*

Defined in C:/Users/esnya/Documents/GitHub/nekostore/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` original

• **original**? : *Error*

*Inherited from [NekostoreError](_nekostoreerror_.nekostoreerror.md).[original](_nekostoreerror_.nekostoreerror.md#optional-original)*

*Defined in [NekostoreError.ts:15](https://github.com/esnya/nekostore/blob/99eadde/src/NekostoreError.ts#L15)*

## Accessors

###  stack

• **get stack**(): *string | undefined*

*Inherited from [NekostoreError](_nekostoreerror_.nekostoreerror.md).[stack](_nekostoreerror_.nekostoreerror.md#stack)*

*Overrides void*

*Defined in [NekostoreError.ts:17](https://github.com/esnya/nekostore/blob/99eadde/src/NekostoreError.ts#L17)*

**Returns:** *string | undefined*
