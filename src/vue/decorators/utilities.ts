/* eslint no-invalid-this: off, @typescript-eslint/no-explicit-any: off */
import Vue from 'vue';

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
