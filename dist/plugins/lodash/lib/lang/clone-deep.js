"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const for_own_1 = require("../object/for-own");
const clone_1 = require("./clone");
/**
 * This method is like `clone` except that it recursively clones `value`.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 12,251 bytes
 * - Micro-dash: 412 bytes
 */
function cloneDeep(value) {
    if (value instanceof Object) {
        value = clone_1.clone(value);
        for_own_1.forOwn(value, (item, key) => {
            value[key] = cloneDeep(item);
        });
    }
    return value;
}
exports.cloneDeep = cloneDeep;
