"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pad_1 = require("./pad");
/**
 * Pads `string` on the right side if it's shorter than `length`. Padding characters are truncated if they exceed `length`.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 3,297 bytes
 * - Micro-dash: 169 bytes
 */
function padEnd(s, length, chars = ' ') {
    return s + pad_1.makePadding(s, length, chars);
}
exports.padEnd = padEnd;
