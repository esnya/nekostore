import fromPairs from 'lodash/fromPairs';
import zip from 'lodash/zip';
import Driver from '../../Driver';
import CollectionReference from '../../CollectionReference';
import BasicCollectionReference from './impl/BasicCollectionReference';
import MemoryStore from '../../store/MemoryStore';
import Store from '../../store/Store';
import EventEmitter from './EventEmitter';
import * as events from 'events';
import pathToRegexp, { Key } from 'path-to-regexp';
import SecurityRule, { User, SecurityRuleMatcher } from './SecurityRule';
import mingo from 'mingo';
import PermissionError from '../../PermissionError';

export interface Options {
  store?: Store;
  eventEmitter?: EventEmitter;
  rule?: SecurityRule;
  user?: User;
}

export interface CompiledSecurityRuleMatcher extends SecurityRuleMatcher {
  match(path: string): Record<string, string> | null;
}

function compileRule(
  rules: SecurityRuleMatcher[],
): CompiledSecurityRuleMatcher[] {
  return rules.map(rule => {
    const keys: Key[] = [];
    const regexp = pathToRegexp(rule.path, keys);

    return {
      ...rule,
      match(path: string): Record<string, string> | null {
        const data = regexp.exec(`/${path}`);
        if (!data) return null;

        return fromPairs(zip(keys.map(k => k.name), data.slice(1)));
      },
    };
  });
}

function findBy<T, U>(collection: T[], by: (item: T) => U | null): U | null {
  for (let i = 0; i < collection.length; i++) {
    const res = by(collection[i]);
    if (res) return res;
  }
}

/**
 * Driver implemtation using a simple store and event emitter.
 */
export default class BasicDriver implements Driver {
  constructor(options: Options = {}) {
    this.store = options.store || new MemoryStore();
    this.eventEmitter = options.eventEmitter || new events.EventEmitter();
    this.user = options.user || null;
    this.rules = compileRule(
      options.rule
        ? options.rule.rules
        : [{ path: '(.*)', read: true, write: true }],
    );
  }

  readonly store: Store;
  readonly eventEmitter: EventEmitter;
  readonly rules: CompiledSecurityRuleMatcher[];

  user: User | null;

  collection<T>(id: string): CollectionReference<T> {
    return new BasicCollectionReference<T>(this, id);
  }

  authorize(path: string, action: 'read' | 'write'): void {
    const request = { auth: this.user || null };
    const result = findBy(this.rules, rule => {
      if (!(action in rule)) return null;

      const data = rule.match(path);
      if (!data) return null;

      return {
        data,
        query: rule[action],
      };
    });
    if (!result || result.query === false) {
      throw new PermissionError(path, action);
    }

    if (result.query === true) return;

    const query = new mingo.Query(result.query);
    const data = {
      ...result.data,
      request,
    };

    if (!query.test(data)) {
      throw new PermissionError(path, action);
    }
  }
}
