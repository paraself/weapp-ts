"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const for_each_1 = require("./for-each");
function keyBy(collection, iteratee) {
    const obj = {};
    for_each_1.forEach(collection, (value) => {
        obj[iteratee(value)] = value;
    });
    return obj;
}
exports.keyBy = keyBy;
