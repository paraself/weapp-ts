"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const for_own_1 = require("./for-own");
/**
 * Creates an object composed of the `object` properties `predicate` returns truthy for.
 *
 * Differences from lodash:
 * - does not treat sparse arrays as dense
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 15,013 bytes
 * - Micro-dash: 328 bytes
 */
function pickBy(object, predicate) {
    const obj = {};
    for_own_1.forOwn(object, (item, key) => {
        if (predicate(item, key)) {
            obj[key] = item;
        }
    });
    return obj;
}
exports.pickBy = pickBy;
