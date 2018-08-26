"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const upper_first_1 = require("./upper-first");
/**
 * Converts the first character of `string` to upper case and the remaining to lower case.
 *
 * Differences from lodash:
 * - requires `string` to be a string
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 1,924 bytes
 * - Micro-dash: 62 bytes
 */
function capitalize(string) {
    return upper_first_1.upperFirst(string.toLowerCase());
}
exports.capitalize = capitalize;
