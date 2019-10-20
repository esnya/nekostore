[nekostore](../README.md) › [Globals](../globals.md) › ["vue/decorators/Collection"](_vue_decorators_collection_.md)

# External module: "vue/decorators/Collection"

## Index

### Functions

* [Collection](_vue_decorators_collection_.md#collection)

## Functions

###  Collection

▸ **Collection**<**T**, **U**>(`refKey`: [PropertyNamesOf](_vue_decorators_utilities_.md#propertynamesof)‹U, [Query](../interfaces/_query_.query.md)‹T››): *VueDecorator*

*Defined in [vue/decorators/Collection.ts:28](https://github.com/esnya/nekostore/blob/master/src/vue/decorators/Collection.ts#L28)*

Property decorator to bind collection.

**`example`** 
```ts
import { Component, Vue } from 'vue-property-decorator';
import Query from 'nekostore/lib/Query';

interface Data {
  foo: string;
}

@Component
class MyComponent extends Vue {
  ref: Query<Data> | null = null;

  @Collection<Data, TestComponent>('ref') docs!: NonEmptyDocumentSnapshot<Data>[] | null;
}
```

**Type parameters:**

▪ **T**: *__type*

▪ **U**: *[VueWithCreated](../interfaces/_vue_decorators_utilities_.vuewithcreated.md)*

**Parameters:**

Name | Type |
------ | ------ |
`refKey` | [PropertyNamesOf](_vue_decorators_utilities_.md#propertynamesof)‹U, [Query](../interfaces/_query_.query.md)‹T›› |

**Returns:** *VueDecorator*
