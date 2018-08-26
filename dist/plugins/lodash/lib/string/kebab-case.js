"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const words_1 = require("./words");
const to_lower_1 = require("./to-lower");
/**
 * Converts `string` to kebab case.
 *
 * Differences from lodash:
 * - requires `string` to be a string
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 4,261 bytes
 * - Micro-dash: 247 bytes
 */
function kebabCase(string) {
    return words_1.words(string)
        .map(to_lower_1.toLower)
        .join('-');
}
exports.kebabCase = kebabCase;
