"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const for_each_right_1 = require("../collection/for-each-right");
const keys_1 = require("./keys");
/**
 * This method is like `forOwn` except that it iterates over properties of `object` in the opposite order.
 *
 * Differences from lodash:
 * - does not treat sparse arrays as dense
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 3,473 bytes
 * - Micro-dash: 192 bytes
 */
function forOwnRight(object, iteratee) {
    for_each_right_1.forEachRight(keys_1.keys(object), (key) => iteratee(object[key], key));
    return object;
}
exports.forOwnRight = forOwnRight;
