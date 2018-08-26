"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flatten_1 = require("./flatten");
/**
 * Removes elements from array corresponding to indexes and returns an array of removed elements.
 *
 * *Note:* This method mutates `array`.
 *
 * Differences from lodash:
 * - behavior is undefined when attempting to pull attributes keyed with anything other than positive integers
 * - does not support deep paths
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 7,723 bytes
 * - Micro-dash: 405 bytes
 */
function pullAt(array, ...indexes) {
    const flattenedIndexes = flatten_1.flatten(indexes);
    const result = flattenedIndexes.map((i) => array[i]);
    let lastI;
    for (const i of flattenedIndexes.sort((a, b) => b - a)) {
        if (i !== lastI) {
            array.splice(i, 1);
        }
        lastI = i;
    }
    return result;
}
exports.pullAt = pullAt;
