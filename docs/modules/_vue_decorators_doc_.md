[nekostore](../README.md) › [Globals](../globals.md) › ["vue/decorators/Doc"](_vue_decorators_doc_.md)

# External module: "vue/decorators/Doc"

## Index

### Functions

* [Doc](_vue_decorators_doc_.md#doc)

## Functions

###  Doc

▸ **Doc**<**T**, **U**>(`refKey`: [PropertyNamesOf](_vue_decorators_utilities_.md#propertynamesof)‹U, [DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T››): *VueDecorator*

*Defined in [vue/decorators/Doc.ts:31](https://github.com/esnya/nekostore/blob/master/src/vue/decorators/Doc.ts#L31)*

Property decoretor to bind document.

**`example`** 
```ts
import { Component, Prop, Vue } from 'vue-property-decolator';
import Query from 'nekostore/lib/Query';

interface Data {
  foo: string;
}

@Component
class MyComponent extends Vue {
  @Prop({ required: false, type: String }) id?: string;

  get docRef(): DocumentReference<Data> | null {
    return this.id ? c1.doc(this.id) : null;
  }

  @Doc<Data, TestComponent>('docRef') doc!: Data | null;
}
```

**Type parameters:**

▪ **T**: *__type*

▪ **U**: *[VueWithCreated](../interfaces/_vue_decorators_utilities_.vuewithcreated.md)*

**Parameters:**

Name | Type |
------ | ------ |
`refKey` | [PropertyNamesOf](_vue_decorators_utilities_.md#propertynamesof)‹U, [DocumentReference](../interfaces/_documentreference_.documentreference.md)‹T›› |

**Returns:** *VueDecorator*
