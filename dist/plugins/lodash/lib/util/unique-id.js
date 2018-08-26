"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @private */
let nextId = 1;
/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 1,043 bytes
 * - Micro-dash: 54 bytes
 * */
function uniqueId(prefix = '') {
    return prefix + nextId++;
}
exports.uniqueId = uniqueId;
