/* eslint no-invalid-this: off, @typescript-eslint/no-explicit-any: off */
import DocumentReference from '../../DocumentReference';
import { VueDecorator } from 'vue-class-component';
import { VueWithCreated, PropertyNamesOf, decoratorFactory } from './utilities';
import DocumentSnapshot from '../../DocumentSnapshot';

/**
 * Property decoretor to bind document.
 *
 * @example
 * ```ts
 * import { Component, Prop, Vue } from 'vue-property-decolator';
 * import Query from 'nekostore/lib/Query';
 *
 * interface Data {
 *   foo: string;
 * }
 *
 * @Component
 * class MyComponent extends Vue {
 *   @Prop({ required: false, type: String }) id?: string;
 *
 *   get docRef(): DocumentReference<Data> | null {
 *     return this.id ? c1.doc(this.id) : null;
 *   }
 *
 *   @Doc<Data, TestComponent>('docRef') doc!: Data | null;
 * }
 * ```
 */
export default function Doc<
  T extends {} = any,
  U extends VueWithCreated = VueWithCreated
>(refKey: PropertyNamesOf<U, DocumentReference<T>>): VueDecorator {
  return decoratorFactory(
    refKey,
    (snapshot: DocumentSnapshot<T>) => snapshot.data || null,
    true,
  );
}
