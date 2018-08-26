"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const identity_1 = require("./identity");
function flow(...funcs) {
    if (funcs.length) {
        return funcs.reduce((result, func) => (input) => func(result(input)));
    }
    else {
        return identity_1.identity;
    }
}
exports.flow = flow;
