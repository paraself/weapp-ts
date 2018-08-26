"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const remove_1 = require("./remove");
/**
 * Removes all given values from array using `SameValueZero` for equality comparisons.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 3,017 bytes
 * - Micro-dash: 381 bytes
 */
function pull(array, ...values) {
    for (const value of values) {
        remove_1.remove(array, (item) => Object.is(item, value));
    }
    return array;
}
exports.pull = pull;
