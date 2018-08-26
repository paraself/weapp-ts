"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates an array excluding all given values.
 *
 * Differences from lodash:
 * - Uses triple equals rather than `SameValueZero`.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 5,665 bytes
 * - Micro-dash: 119 bytes
 */
function without(array, ...values) {
    return array.filter((item) => values.indexOf(item) === -1);
}
exports.without = without;
