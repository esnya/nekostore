/* eslint no-invalid-this: off, @typescript-eslint/no-explicit-any: off */
import Query from '../../Query';
import { VueDecorator } from 'vue-class-component';
import { ExistingDocumentSnapshot } from '../../DocumentSnapshot';
import { VueWithCreated, PropertyNamesOf, decoratorFactory } from './utilities';
import QuerySnapshot from '../../QuerySnapshot';

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
  T extends {} = any,
  U extends VueWithCreated = VueWithCreated
>(refKey: PropertyNamesOf<U, Query<T>>): VueDecorator {
  return decoratorFactory(
    refKey,
    (
      snapshot: QuerySnapshot<T>,
      prevValue: ExistingDocumentSnapshot<T>[] | null,
    ) => {
      let value = prevValue || [];

      snapshot.docs.forEach(change => {
        switch (change.type) {
          case 'added':
            if (change.exists()) value.push(change);
            return;
          case 'modified':
            if (change.exists()) {
              value = value.map(snapshot =>
                snapshot.ref.path === change.ref.path ? change : snapshot,
              );
            }
            return;
          case 'removed':
            value = value.filter(
              snapshot => snapshot.ref.path !== change.ref.path,
            );
        }
      });

      return value;
    },
    false,
  );
}
