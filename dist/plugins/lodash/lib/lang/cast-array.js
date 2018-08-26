"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Casts `value` as an array if it's not one.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 128 bytes
 * - Micro-dash: 44 bytes
 */
function castArray(value) {
    return (Array.isArray(value) ? value : [value]);
}
exports.castArray = castArray;
