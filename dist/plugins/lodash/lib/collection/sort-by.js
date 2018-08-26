"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../lang/index");
const map_1 = require("./map");
function sortBy(collection, iteratees) {
    const fns = index_1.castArray(iteratees);
    let index = 0;
    const metas = map_1.map(collection, (value) => {
        const meta = [];
        meta.value = value;
        for (const fn of fns) {
            const v = fn(value);
            meta.push(ordinal(v), v);
        }
        meta.push(index++);
        return meta;
    });
    metas.sort((m1, m2) => {
        for (let i = 0; i < m1.length; ++i) {
            if (m1[i] < m2[i]) {
                return -1;
            }
            else if (m1[i] > m2[i]) {
                return 1;
            }
        }
    });
    return metas.map((e) => e.value);
}
exports.sortBy = sortBy;
function ordinal(value) {
    if (Number.isNaN(value)) {
        return 3;
    }
    if (value === undefined) {
        return 2;
    }
    if (value === null) {
        return 1;
    }
    return 0;
}
