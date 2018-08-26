"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets the last element of array.
 *
 * Differences from lodash:
 * - no special consideration is given to string-keyed values set on the array
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 69 bytes
 * - Micro-dash: 24 bytes
 */
function last(array) {
    return array[array.length - 1];
}
exports.last = last;
