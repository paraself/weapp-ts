"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a shallow clone of `value`.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 12,251 bytes
 * - Micro-dash: 90 bytes
 */
function clone(value) {
    if (Array.isArray(value)) {
        return value.slice();
    }
    else if (value instanceof Object) {
        return Object.assign({}, value);
    }
    else {
        return value;
    }
}
exports.clone = clone;
