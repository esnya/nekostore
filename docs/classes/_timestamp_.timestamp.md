[nekostore](../README.md) › [Globals](../globals.md) › ["Timestamp"](../modules/_timestamp_.md) › [Timestamp](_timestamp_.timestamp.md)

# Class: Timestamp

## Hierarchy

* **Timestamp**

## Index

### Constructors

* [constructor](_timestamp_.timestamp.md#constructor)

### Properties

* [nanoseconds](_timestamp_.timestamp.md#nanoseconds)
* [seconds](_timestamp_.timestamp.md#seconds)

### Methods

* [toDate](_timestamp_.timestamp.md#todate)
* [toMillis](_timestamp_.timestamp.md#tomillis)
* [fromDate](_timestamp_.timestamp.md#static-fromdate)
* [fromMillis](_timestamp_.timestamp.md#static-frommillis)
* [now](_timestamp_.timestamp.md#static-now)

## Constructors

###  constructor

\+ **new Timestamp**(`seconds`: number, `nanoseconds`: number): *[Timestamp](_timestamp_.timestamp.md)*

*Defined in [Timestamp.ts:13](https://github.com/esnya/nekostore/blob/4486881/src/Timestamp.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`seconds` | number |
`nanoseconds` | number |

**Returns:** *[Timestamp](_timestamp_.timestamp.md)*

## Properties

###  nanoseconds

• **nanoseconds**: *number*

*Defined in [Timestamp.ts:21](https://github.com/esnya/nekostore/blob/4486881/src/Timestamp.ts#L21)*

___

###  seconds

• **seconds**: *number*

*Defined in [Timestamp.ts:20](https://github.com/esnya/nekostore/blob/4486881/src/Timestamp.ts#L20)*

## Methods

###  toDate

▸ **toDate**(): *Date*

*Defined in [Timestamp.ts:23](https://github.com/esnya/nekostore/blob/4486881/src/Timestamp.ts#L23)*

**Returns:** *Date*

___

###  toMillis

▸ **toMillis**(): *number*

*Defined in [Timestamp.ts:27](https://github.com/esnya/nekostore/blob/4486881/src/Timestamp.ts#L27)*

**Returns:** *number*

___

### `Static` fromDate

▸ **fromDate**(`date`: Date): *[Timestamp](_timestamp_.timestamp.md)*

*Defined in [Timestamp.ts:5](https://github.com/esnya/nekostore/blob/4486881/src/Timestamp.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *[Timestamp](_timestamp_.timestamp.md)*

___

### `Static` fromMillis

▸ **fromMillis**(`milliseconds`: number): *[Timestamp](_timestamp_.timestamp.md)*

*Defined in [Timestamp.ts:8](https://github.com/esnya/nekostore/blob/4486881/src/Timestamp.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`milliseconds` | number |

**Returns:** *[Timestamp](_timestamp_.timestamp.md)*

___

### `Static` now

▸ **now**(): *[Timestamp](_timestamp_.timestamp.md)*

*Defined in [Timestamp.ts:2](https://github.com/esnya/nekostore/blob/4486881/src/Timestamp.ts#L2)*

**Returns:** *[Timestamp](_timestamp_.timestamp.md)*
