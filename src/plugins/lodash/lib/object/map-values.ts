import { ObjectIteratee, ObjectWith } from '../interfaces';
import { forOwn } from './for-own';

/**
 * Creates an object with the same keys as `object` and values generated by running each own enumerable string keyed property of `object` thru `iteratee`.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 14,120 bytes
 * - Micro-dash: 302 bytes
 */
export function mapValues<T, O>(object: T, iteratee: ObjectIteratee<T, O>) {
  const obj: ObjectWith<O> = {};
  forOwn(object, (value, key) => {
    obj[key as string] = iteratee(value, key);
  });
  return obj;
}