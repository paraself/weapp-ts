"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const for_own_1 = require("../object/for-own");
function forEach(collection, iteratee) {
    if (Array.isArray(collection)) {
        for (let i = 0, l = collection.length; i < l; ++i) {
            if (iteratee(collection[i], i) === false) {
                break;
            }
        }
    }
    else {
        for_own_1.forOwn(collection, iteratee);
    }
    return collection;
}
exports.forEach = forEach;
