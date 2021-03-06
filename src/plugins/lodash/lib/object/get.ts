/**
 * Gets the value at `path` of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.
 *
 * Differences from lodash:
 * - only accepts an array for `path`, not a dot-separated string
 * - using `-0` in the path (which is a type error) acts like `'0'` instead of `'-0'`
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 5,092 bytes
 * - Micro-dash: 65 bytes
 */

export function get<T, K1 extends keyof T>(
  object: T,
  path: [K1],
  defaultValue: T[K1],
): T[K1];
export function get<T, K1 extends keyof T, K2 extends keyof T[K1]>(
  object: T,
  path: [K1, K2],
  defaultValue: T[K1][K2],
): T[K1][K2];
export function get<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2]
>(object: T, path: [K1, K2, K3], defaultValue: T[K1][K2][K3]): T[K1][K2][K3];
export function get<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3]
>(
  object: T,
  path: [K1, K2, K3, K4],
  defaultValue: T[K1][K2][K3][K4],
): T[K1][K2][K3][K4];
export function get(
  object: object | null | undefined,
  path: string[],
  defaultValue?: any,
): any;

export function get(object: any, path: string[], defaultValue?: any) {
  const length = path.length;
  let index = 0;
  while (object != null && index < length) {
    object = object[path[index++]];
  }
  return !index || index < length || object === undefined
    ? defaultValue
    : object;
}
