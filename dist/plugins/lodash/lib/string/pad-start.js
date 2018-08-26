"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pad_1 = require("./pad");
/**
 * Pads `string` on the left side if it's shorter than `length`. Padding characters are truncated if they exceed `length`.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 3,297 bytes
 * - Micro-dash: 169 bytes
 */
function padStart(s, length, chars = ' ') {
    return pad_1.makePadding(s, length, chars) + s;
}
exports.padStart = padStart;
