/* eslint no-invalid-this: off, @typescript-eslint/no-explicit-any: off */
import Vue from 'vue';
import DocumentReference from '../../DocumentReference';
import Query from '../../Query';
import { VueDecorator } from 'vue-class-component';
import Unsubscribe from '../../Unsubscribe';
import DocumentSnapshot, {
  NonEmptyDocumentSnapshot,
} from '../../DocumentSnapshot';
import QuerySnapshot from '../../QuerySnapshot';
import { SnapshotOf } from '../../types';

export interface VueWithCreated extends Vue {
  created?: () => void;
}

export type PropertyNamesOf<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

export function chainMethod<
  T,
  Key extends keyof T,
  U extends (...args: any[]) => void = (...args: any[]) => void
>(target: T, key: Key, method: U): void {
  const original = target[key];

  Object.defineProperty(target, key, {
    value(...args: any[]) {
      if (typeof original === 'function') original.call(this, ...args);
      method.call(this, ...args);
    },
  });
}

type SnapshotTypeOf<
  T extends {},
  U extends DocumentReference<T> | Query<T>
> = U extends DocumentReference<T>
  ? DocumentSnapshot<T>
  : (U extends Query<T> ? QuerySnapshot<T> : never);

type DataTypeOf<
  T extends {},
  U extends DocumentReference<T> | Query<T>
> = U extends DocumentReference<T>
  ? T
  : (U extends Query<T> ? NonEmptyDocumentSnapshot<T>[] : never);

export function decoratorFactory<
  V extends DocumentReference<T> | Query<T>,
  T extends {} = any,
  U extends VueWithCreated = VueWithCreated,
  X extends T | NonEmptyDocumentSnapshot<T>[] = DataTypeOf<T, V>
>(
  refKey: PropertyNamesOf<U, V>,
  onSnapshot: (snapshot: SnapshotOf<V>, data?: any) => X,
  get: boolean,
): VueDecorator {
  const decorator = (target: U, key: PropertyNamesOf<U, X | null>): void => {
    target[key] = null;
    chainMethod(target, 'created', async function created(this: U) {
      const set = (doc: X | null): void => {
        if (typeof key !== 'string') throw new TypeError('key must be string');
        this.$data[key] = doc;
      };

      let unsubscribe: Unsubscribe | null = null;
      this.$watch(
        refKey as string,
        async (ref: V | null) => {
          if (unsubscribe) {
            await unsubscribe();
            unsubscribe = null;
          }

          if (!ref) {
            set(null);
            return;
          }

          unsubscribe = await ref.onSnapshot(snapshot => {
            set(onSnapshot(snapshot, this[key]));
          });

          if (get) {
            const snapshot = await ref.get();
            set(onSnapshot(snapshot as SnapshotOf<V>, this[key]));
          }
        },
        { immediate: true },
      );

      this.$on('destroyed', async () => {
        if (unsubscribe) await unsubscribe();
      });
    });
  };

  return decorator as VueDecorator;
}
