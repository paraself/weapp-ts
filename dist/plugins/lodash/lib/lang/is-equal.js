"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = require("../object/keys");
/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * Differences from lodash:
 * - cannot handle circular references
 * - does not give special treatment to arrays; their own properties are compared just like other objects. Note this means sparse arrays are not equal to their dense "equivalents".
 * - `isEqual(0, -0) === false`
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 10,809 bytes
 * - Micro-dash: 536 bytes
 */
function isEqual(value, other) {
    if (Object.is(value, other)) {
        // covers e.g. NaN === NaN
        return true;
    }
    if (!(value instanceof Object && other instanceof Object)) {
        return false;
    }
    for (const key of keys_1.keys(value)) {
        if (!other.hasOwnProperty(key)) {
            return false;
        }
    }
    for (const key of keys_1.keys(other)) {
        if (!isEqual(value[key], other[key])) {
            return false;
        }
    }
    return true;
}
exports.isEqual = isEqual;
