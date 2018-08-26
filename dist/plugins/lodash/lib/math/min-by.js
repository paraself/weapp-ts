"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const for_each_1 = require("../collection/for-each");
/**
 * This method is like `min` except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 13,897 bytes
 * - Micro-dash: 421 bytes
 */
function minBy(array, iteratee) {
    let min;
    let minValue;
    for_each_1.forEach(array, (value) => {
        const criterion = iteratee(value);
        if (min === undefined || criterion < minValue) {
            min = value;
            minValue = criterion;
        }
    });
    return min;
}
exports.minBy = minBy;
