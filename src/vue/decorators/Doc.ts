/* eslint no-invalid-this: off, @typescript-eslint/no-explicit-any: off */
import DocumentReference from '../../DocumentReference';
import { VueDecorator } from 'vue-class-component';
import Unsubscribe from '../../Unsubscribe';
import { VueWithCreated, PropertyNamesOf, chainMethod } from './utilities';

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
  const decorator = (target: U, key: PropertyNamesOf<U, T | null>): void => {
    target[key] = null;
    chainMethod(target, 'created', async function created(this: U) {
      const set = (doc: T | null): void => {
        if (typeof key !== 'string') throw new TypeError('key must be string');
        this.$data[key] = doc;
      };

      let unsubscribe: Unsubscribe | null = null;
      this.$watch(
        refKey as string,
        async (ref: DocumentReference<T>) => {
          if (unsubscribe) {
            await unsubscribe();
            unsubscribe = null;
          }

          if (!ref) {
            set(null);
            return;
          }

          unsubscribe = await ref.onSnapshot(snapshot => {
            set(snapshot.data || null);
          });
          const snapshot = await ref.get();
          set(snapshot.data || null);
        },
        { immediate: true },
      );

      this.$on('destroyed', async () => {
        await unsubscribe();
      });
    });
  };

  return decorator as VueDecorator;
}
