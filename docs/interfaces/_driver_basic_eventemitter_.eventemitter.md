[nekostore](../README.md) › [Globals](../globals.md) › ["driver/basic/EventEmitter"](../modules/_driver_basic_eventemitter_.md) › [EventEmitter](_driver_basic_eventemitter_.eventemitter.md)

# Interface: EventEmitter

Interface for implementation of the EventEmitter that listens and emits events.

## Hierarchy

* **EventEmitter**

## Index

### Methods

* [emit](_driver_basic_eventemitter_.eventemitter.md#emit)
* [off](_driver_basic_eventemitter_.eventemitter.md#off)
* [on](_driver_basic_eventemitter_.eventemitter.md#on)
* [once](_driver_basic_eventemitter_.eventemitter.md#once)

## Methods

###  emit

▸ **emit**<**T**>(`event`: string, ...`args`: T[]): *void*

*Defined in [driver/basic/EventEmitter.ts:23](https://github.com/esnya/nekostore/blob/master/src/driver/basic/EventEmitter.ts#L23)*

Emit event.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`...args` | T[] |

**Returns:** *void*

___

###  off

▸ **off**<**T**>(`event`: string, `listener`: function): *void*

*Defined in [driver/basic/EventEmitter.ts:18](https://github.com/esnya/nekostore/blob/master/src/driver/basic/EventEmitter.ts#L18)*

Remove an event listenr.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: T[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T[] |

**Returns:** *void*

___

###  on

▸ **on**<**T**>(`event`: string, `listener`: function): *void*

*Defined in [driver/basic/EventEmitter.ts:8](https://github.com/esnya/nekostore/blob/master/src/driver/basic/EventEmitter.ts#L8)*

Add an event listener.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: T[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T[] |

**Returns:** *void*

___

###  once

▸ **once**<**T**>(`event`: string, `listener`: function): *void*

*Defined in [driver/basic/EventEmitter.ts:13](https://github.com/esnya/nekostore/blob/master/src/driver/basic/EventEmitter.ts#L13)*

Add a one-time event listener for once.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: T[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T[] |

**Returns:** *void*
