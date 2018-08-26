"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Flattens `array` a single level deep.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 1,178 bytes
 * - Micro-dash: 39 bytes
 */
function flatten(array) {
    return [].concat(...array);
}
exports.flatten = flatten;
