"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const for_own_right_1 = require("../object/for-own-right");
function forEachRight(collection, iteratee) {
    if (Array.isArray(collection)) {
        for (let i = collection.length; --i >= 0;) {
            if (iteratee(collection[i], i) === false) {
                break;
            }
        }
    }
    else {
        for_own_right_1.forOwnRight(collection, iteratee);
    }
    return collection;
}
exports.forEachRight = forEachRight;
