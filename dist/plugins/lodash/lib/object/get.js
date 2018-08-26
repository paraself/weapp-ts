"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
function get(object, path, defaultValue) {
    const length = path.length;
    let index = 0;
    while (object != null && index < length) {
        object = object[path[index++]];
    }
    return !index || index < length || object === undefined
        ? defaultValue
        : object;
}
exports.get = get;
