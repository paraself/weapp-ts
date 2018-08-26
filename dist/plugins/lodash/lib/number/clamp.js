"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Clamps `number` within the inclusive lower and upper bounds.
 *
 * Differences from lodash:
 * - `lower` is required
 * - does not coerce bounds that are `NaN` to be `0`
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 1,334 bytes
 * - Micro-dash: 51 bytes
 */
function clamp(number, lower, upper) {
    return Math.min(upper, Math.max(lower, number));
}
exports.clamp = clamp;
