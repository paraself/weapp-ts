"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const for_each_1 = require("../collection/for-each");
const clone_1 = require("../lang/clone");
function merge(object, ...sources) {
    for (const source of sources) {
        for_each_1.forEach(source, (value, key) => {
            const myValue = object[key];
            if (myValue instanceof Object) {
                value = merge(clone_1.clone(myValue), value);
            }
            object[key] = value;
        });
    }
    return object;
}
exports.merge = merge;
