[nekostore](../README.md) › [Globals](../globals.md) › ["driver/basic/BasicDriver"](../modules/_driver_basic_basicdriver_.md) › [CompiledSecurityRuleMatcher](_driver_basic_basicdriver_.compiledsecurityrulematcher.md)

# Interface: CompiledSecurityRuleMatcher

## Hierarchy

* [SecurityRuleMatcher](_driver_basic_securityrule_.securityrulematcher.md)

  ↳ **CompiledSecurityRuleMatcher**

## Index

### Properties

* [path](_driver_basic_basicdriver_.compiledsecurityrulematcher.md#path)
* [read](_driver_basic_basicdriver_.compiledsecurityrulematcher.md#optional-read)
* [write](_driver_basic_basicdriver_.compiledsecurityrulematcher.md#optional-write)

### Methods

* [match](_driver_basic_basicdriver_.compiledsecurityrulematcher.md#match)

## Properties

###  path

• **path**: *string*

*Inherited from [SecurityRuleMatcher](_driver_basic_securityrule_.securityrulematcher.md).[path](_driver_basic_securityrule_.securityrulematcher.md#path)*

*Defined in [driver/basic/SecurityRule.ts:12](https://github.com/esnya/nekostore/blob/master/src/driver/basic/SecurityRule.ts#L12)*

___

### `Optional` read

• **read**? : *boolean | FilterQuery‹[Request](_driver_basic_securityrule_.request.md)›*

*Inherited from [SecurityRuleMatcher](_driver_basic_securityrule_.securityrulematcher.md).[read](_driver_basic_securityrule_.securityrulematcher.md#optional-read)*

*Defined in [driver/basic/SecurityRule.ts:13](https://github.com/esnya/nekostore/blob/master/src/driver/basic/SecurityRule.ts#L13)*

___

### `Optional` write

• **write**? : *boolean | FilterQuery‹[Request](_driver_basic_securityrule_.request.md)›*

*Inherited from [SecurityRuleMatcher](_driver_basic_securityrule_.securityrulematcher.md).[write](_driver_basic_securityrule_.securityrulematcher.md#optional-write)*

*Defined in [driver/basic/SecurityRule.ts:14](https://github.com/esnya/nekostore/blob/master/src/driver/basic/SecurityRule.ts#L14)*

## Methods

###  match

▸ **match**(`path`: string): *Record‹string, string› | null*

*Defined in [driver/basic/BasicDriver.ts:23](https://github.com/esnya/nekostore/blob/master/src/driver/basic/BasicDriver.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Record‹string, string› | null*
