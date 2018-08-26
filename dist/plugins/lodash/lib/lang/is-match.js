"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const every_1 = require("../collection/every");
const is_empty_1 = require("./is-empty");
/**
 * Performs a partial deep comparison between `object` and `source` to determine if `object` contains equivalent property values.
 *
 * *Note:* This method is equivalent to `matches` when source is partially applied.
 *
 * Partial comparisons will match empty array and empty object source values against any array or object value, respectively.
 *
 * Differences from lodash:
 * - does not match `0` to `-0`
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 11,235 bytes
 * - Micro-dash: 1,048 bytes
 */
function isMatch(object, source) {
    return is_empty_1.isEmpty(source) || isMatch0(object, source);
}
exports.isMatch = isMatch;
/** @private */
function isMatch0(object, source) {
    if (Object.is(object, source)) {
        return true;
    }
    if (!(object instanceof Object && source instanceof Object)) {
        return false;
    }
    const isArray = Array.isArray(object);
    if (isArray !== Array.isArray(source)) {
        return false;
    }
    if (isArray) {
        const unmatched = object.slice();
        for (const innerSource of source) {
            const i = unmatched.findIndex((item) => isMatch0(item, innerSource));
            if (i < 0) {
                return false;
            }
            unmatched.splice(i, 1);
        }
        return true;
    }
    else {
        return every_1.every(source, (value, key) => object.hasOwnProperty(key) && isMatch0(object[key], value));
    }
}
