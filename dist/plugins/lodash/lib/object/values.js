"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = require("./keys");
/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 3,368 bytes
 * - Micro-dash: 82 bytes
 */
function values(object) {
    return keys_1.keys(object).map((key) => object[key]);
}
exports.values = values;
