"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const identity_1 = require("../util/identity");
/**
 * Creates an array with all falsey values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 97 bytes
 * - Micro-dash: 36 bytes
 */
function compact(array) {
    return array.filter(identity_1.identity);
}
exports.compact = compact;
