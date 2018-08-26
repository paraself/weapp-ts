"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../util/index");
function zip(...arrays) {
    const length = Math.max(0, ...arrays.map((a) => (a ? a.length : 0)));
    return index_1.times(length, (i) => arrays.map((a) => (a ? a[i] : undefined)));
}
exports.zip = zip;
