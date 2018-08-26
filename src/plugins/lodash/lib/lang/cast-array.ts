/**
 * Casts `value` as an array if it's not one.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 128 bytes
 * - Micro-dash: 44 bytes
 */
export function castArray<T>(value: T): T extends any[] ? T : T[] {
  return (Array.isArray(value) ? value : [value]) as any;
}
