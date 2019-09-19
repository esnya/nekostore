[nekostore](../README.md) › [Globals](../globals.md) › ["Timestamp"](../modules/_timestamp_.md) › [Timestamp](_timestamp_.timestamp.md)

# Class: Timestamp

Timestamp like firebase.firestore.Timestamp

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

*Defined in [Timestamp.ts:27](https://github.com/esnya/nekostore/blob/f2443c4/src/Timestamp.ts#L27)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`seconds` | number | - |
`nanoseconds` | number |   |

**Returns:** *[Timestamp](_timestamp_.timestamp.md)*

## Properties

###  nanoseconds

• **nanoseconds**: *number*

*Defined in [Timestamp.ts:39](https://github.com/esnya/nekostore/blob/f2443c4/src/Timestamp.ts#L39)*

___

###  seconds

• **seconds**: *number*

*Defined in [Timestamp.ts:38](https://github.com/esnya/nekostore/blob/f2443c4/src/Timestamp.ts#L38)*

## Methods

###  toDate

▸ **toDate**(): *Date*

*Defined in [Timestamp.ts:44](https://github.com/esnya/nekostore/blob/f2443c4/src/Timestamp.ts#L44)*

Convert into Date

**Returns:** *Date*

___

###  toMillis

▸ **toMillis**(): *number*

*Defined in [Timestamp.ts:51](https://github.com/esnya/nekostore/blob/f2443c4/src/Timestamp.ts#L51)*

Convert into milliseconds

**Returns:** *number*

___

### `Static` fromDate

▸ **fromDate**(`date`: Date): *[Timestamp](_timestamp_.timestamp.md)*

*Defined in [Timestamp.ts:15](https://github.com/esnya/nekostore/blob/f2443c4/src/Timestamp.ts#L15)*

Convert Date into Tmestamp

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *[Timestamp](_timestamp_.timestamp.md)*

___

### `Static` fromMillis

▸ **fromMillis**(`milliseconds`: number): *[Timestamp](_timestamp_.timestamp.md)*

*Defined in [Timestamp.ts:22](https://github.com/esnya/nekostore/blob/f2443c4/src/Timestamp.ts#L22)*

Get timestamp from milliseconds.

**Parameters:**

Name | Type |
------ | ------ |
`milliseconds` | number |

**Returns:** *[Timestamp](_timestamp_.timestamp.md)*

___

### `Static` now

▸ **now**(): *[Timestamp](_timestamp_.timestamp.md)*

*Defined in [Timestamp.ts:8](https://github.com/esnya/nekostore/blob/f2443c4/src/Timestamp.ts#L8)*

Get current timestamp.

**Returns:** *[Timestamp](_timestamp_.timestamp.md)*
