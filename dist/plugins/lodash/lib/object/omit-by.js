"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pick_by_1 = require("./pick-by");
/**
 * The opposite of `pickBy`; this method creates an object composed of the own enumerable string keyed properties of `object` that `predicate` doesn't return truthy for.
 *
 * Differences from lodash:
 * - does not treat sparse arrays as dense
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 15,380 bytes
 * - Micro-dash: 375 bytes
 */
function omitBy(object, predicate) {
    return pick_by_1.pickBy(object, (item, key) => !predicate(item, key));
}
exports.omitBy = omitBy;
