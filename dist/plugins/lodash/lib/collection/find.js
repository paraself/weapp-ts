"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = require("../object/keys");
function find(collection, predicate, fromIndex = 0) {
    if (Array.isArray(collection)) {
        return collection
            .slice(fromIndex)
            .find((item, index) => predicate(item, index));
    }
    else {
        for (const key of keys_1.keys(collection).slice(fromIndex)) {
            const item = collection[key];
            if (predicate(item, key)) {
                return item;
            }
        }
    }
}
exports.find = find;
