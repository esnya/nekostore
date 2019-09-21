/* eslint no-invalid-this: off, @typescript-eslint/no-explicit-any: off */
import Query from '../../Query';
import { VueDecorator } from 'vue-class-component';
import Unsubscribe from '../../Unsubscribe';
import { ExistingDocumentSnapshot } from '../../DocumentSnapshot';
import { VueWithCreated, PropertyNamesOf, chainMethod } from './utilities';

/**
 * Property decoretor to bind collection.
 *
 * @example
 * ```ts
 * import { Component, Vue } from 'vue-property-decolator';
 * import Query from 'nekostore/lib/Query';
 *
 * interface Data {
 *   foo: string;
 * }
 *
 * @Component
 * class MyComponent extends Vue {
 *   ref: Query<Data> | null = null;
 *
 *   @Collection<Data, TestComponent>('ref') docs!: ExistingDocumentSnapshot<Data>[] | null;
 * }
 * ```
 */
export default function Collection<
  T = {},
  U extends VueWithCreated = VueWithCreated
>(refKey: PropertyNamesOf<U, Query<T>>): VueDecorator {
  const decorator = (
    target: U,
    key: PropertyNamesOf<U, ExistingDocumentSnapshot<T>[] | null>,
  ): void => {
    target[key] = null;

    chainMethod(target, 'created', async function created(this: U) {
      if (typeof key !== 'string') throw new TypeError('key must be string');

      const get = (): ExistingDocumentSnapshot<T>[] | null => {
        return this.$data[key];
      };

      const set = (docs: ExistingDocumentSnapshot<T>[] | null): void => {
        this.$data[key] = docs;
      };

      let unsubscribe: Unsubscribe | null = null;
      this.$watch(
        refKey as string,
        async (ref: Query<T>) => {
          if (unsubscribe) {
            await unsubscribe();
            unsubscribe = null;
          }

          if (!ref) {
            set(null);
            return;
          }

          unsubscribe = await ref.onSnapshot(snapshot => {
            if (get() === null) set([]);

            snapshot.docs.forEach(change => {
              switch (change.type) {
                case 'added':
                  if (change.exists()) get().push(change);
                  return;
                case 'modified':
                  if (change.exists()) {
                    set(
                      get().map(snapshot =>
                        snapshot.ref.path === change.ref.path
                          ? change
                          : snapshot,
                      ),
                    );
                  }
                  return;
                case 'removed':
                  set(
                    get().filter(
                      snapshot => snapshot.ref.path !== change.ref.path,
                    ),
                  );
                  return;
              }
            });
          });
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
