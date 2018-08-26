"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts the first character of `string` to upper case.
 *
 * Differences from lodash:
 * - requires `string` to be a string
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 1,887 bytes
 * - Micro-dash: 47 bytes
 */
function upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
exports.upperFirst = upperFirst;
