"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates an object composed of the picked `object` properties.
 *
 * Differences from lodash:
 * - `paths` must be direct properties of `object` (they cannot references deep properties)
 * - `pick(obj, -0)` (which is a type error) acts like `pick(obj, '0')` instead of `pick(obj, '-0')`
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 7,778 bytes
 * - Micro-dash: 278 bytes
 */
function pick(object, ...paths) {
    const result = {};
    if (object != null) {
        for (const path of paths) {
            result[path] = object[path];
        }
    }
    return result;
}
exports.pick = pick;
