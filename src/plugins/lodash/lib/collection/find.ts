import { ArrayIteratee, ObjectIteratee } from '../interfaces';
import { keys } from '../object/keys';

/**
 * Iterates over elements of `collection`, returning the first element `predicate` returns truthy for.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 14,699 bytes
 * - Micro-dash: 355 bytes
 */

export function find<T>(
  array: T[],
  predicate: ArrayIteratee<T, boolean>,
  fromIndex?: number,
): T | undefined;
export function find<T>(
  object: T,
  predicate: ObjectIteratee<T, boolean>,
  fromIndex?: number,
): T[keyof T] | undefined;

export function find(collection: any, predicate: Function, fromIndex = 0) {
  if (Array.isArray(collection)) {
    return collection
      .slice(fromIndex)
      .find((item, index) => predicate(item, index));
  } else {
    for (const key of keys(collection).slice(fromIndex)) {
      const item = collection[key];
      if (predicate(item, key)) {
        return item;
      }
    }
  }
}
