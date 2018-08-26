"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if value is `null` or `undefined`.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 74 bytes
 * - Micro-dash: 29 bytes
 */
function isNil(value) {
    return value == null;
}
exports.isNil = isNil;
