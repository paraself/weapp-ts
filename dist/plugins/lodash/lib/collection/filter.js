"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const for_each_1 = require("./for-each");
function filter(collection, predicate) {
    const result = [];
    for_each_1.forEach(collection, (item, indexOrKey) => {
        if (predicate(item, indexOrKey)) {
            result.push(item);
        }
    });
    return result;
}
exports.filter = filter;
