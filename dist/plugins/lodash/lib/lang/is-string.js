"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if value is classified as a String primitive.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 739 bytes
 * - Micro-dash: 39 bytes
 */
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
