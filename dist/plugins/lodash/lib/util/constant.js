"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a function that returns `value`.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 57 bytes
 * - Micro-dash: 26 bytes
 */
function constant(value) {
    return () => value;
}
exports.constant = constant;
