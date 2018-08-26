"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const for_each_1 = require("./for-each");
const for_each_right_1 = require("./for-each-right");
function reduce(collection, iteratee, accumulator) {
    return doReduce(for_each_1.forEach, collection, iteratee, accumulator, arguments.length < 3);
}
exports.reduce = reduce;
function reduceRight(collection, iteratee, accumulator) {
    return doReduce(for_each_right_1.forEachRight, collection, iteratee, accumulator, arguments.length < 3);
}
exports.reduceRight = reduceRight;
/** @private */
function doReduce(iterationFn, collection, iteratee, accumulator, initAccum) {
    iterationFn(collection, (value, indexOrKey) => {
        if (initAccum) {
            accumulator = value;
            initAccum = false;
        }
        else {
            accumulator = iteratee(accumulator, value, indexOrKey);
        }
    });
    return accumulator;
}
