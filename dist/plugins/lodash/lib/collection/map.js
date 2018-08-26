"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const for_each_1 = require("./for-each");
function map(collection, iteratee) {
    const mapped = [];
    for_each_1.forEach(collection, (value, keyOrIndex) => {
        mapped.push(iteratee(value, keyOrIndex));
    });
    return mapped;
}
exports.map = map;
