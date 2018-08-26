"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partial_1 = require("./partial");
function curry(func, arity = func.length) {
    return function (...args) {
        if (args.length < arity) {
            return curry(partial_1.partial(func, ...args), (arity - args.length));
        }
        else {
            return func.apply(this, args);
        }
    };
}
exports.curry = curry;
