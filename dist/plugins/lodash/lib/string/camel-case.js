"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const words_1 = require("./words");
const capitalize_1 = require("./capitalize");
/**
 * Converts `string` to camel case.
 *
 * Differences from lodash:
 * - requires `string` to be a string
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 5,242 bytes
 * - Micro-dash: 308 bytes
 */
function camelCase(string) {
    return words_1.words(string)
        .map((w, i) => (i ? capitalize_1.capitalize(w) : w.toLowerCase()))
        .join('');
}
exports.camelCase = camelCase;
