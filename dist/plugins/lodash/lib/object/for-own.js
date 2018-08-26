"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = require("./keys");
/**
 * Iterates over own enumerable string keyed properties of an object and invokes `iteratee` for each property.
 *
 * Differences from lodash:
 * - does not treat sparse arrays as dense
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 3,466 bytes
 * - Micro-dash: 247 bytes
 */
function forOwn(object, iteratee) {
    for (const key of keys_1.keys(object)) {
        if (iteratee(object[key], key) === false) {
            break;
        }
    }
    return object;
}
exports.forOwn = forOwn;
