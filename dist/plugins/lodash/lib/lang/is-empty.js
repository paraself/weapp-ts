"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = require("../object/keys");
/**
 * Checks if `value` is an empty object or collection.
 *
 * Objects are considered empty if they have no own enumerable string keyed properties.
 *
 * Arrays are considered empty if they have a `length` of `0`.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 4,248 bytes
 * - Micro-dash: 101 bytes
 */
function isEmpty(value) {
    if (!Array.isArray(value)) {
        value = keys_1.keys(value);
    }
    return value.length === 0;
}
exports.isEmpty = isEmpty;
