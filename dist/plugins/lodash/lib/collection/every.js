"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const for_each_1 = require("./for-each");
function every(collection, predicate) {
    let result = true;
    for_each_1.forEach(collection, (value, keyOrIndex) => (result = !!predicate(value, keyOrIndex)));
    return result;
}
exports.every = every;
