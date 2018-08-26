"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const identity_1 = require("./identity");
function flowRight(...funcs) {
    if (funcs.length) {
        return funcs.reduce((result, func) => (input) => result(func(input)));
    }
    else {
        return identity_1.identity;
    }
}
exports.flowRight = flowRight;
