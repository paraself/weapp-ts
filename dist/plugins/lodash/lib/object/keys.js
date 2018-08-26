"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates an array of the own enumerable property names of object.
 *
 * Differences from lodash:
 * - does not give any special consideration for arrays, arguments objects, strings, or prototype objects (e.g. many will have `'length'` in the returned array)
 *
 * Contribution to minified bundle size, when it is the only function imported:
 */
function keys(object) {
    if (object) {
        return Object.getOwnPropertyNames(object);
    }
    else {
        return [];
    }
}
exports.keys = keys;
