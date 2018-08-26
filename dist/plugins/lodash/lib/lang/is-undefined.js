"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if `value` is `undefined`.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 77 bytes
 * - Micro-dash: 32 bytes
 */
function isUndefined(value) {
    return value === undefined;
}
exports.isUndefined = isUndefined;
