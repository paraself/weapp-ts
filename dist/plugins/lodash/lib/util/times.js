"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Invokes the iteratee `n` times, returning an array of the results of each invocation.
 *
 * Differences from lodash:
 * - has undefined behavior when given a non natural number for `n`
 * - does not provide a default for `iteratee`
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 1,489 bytes
 * - Micro-dash: 49 bytes
 */
function times(n, iteratee) {
    const result = [];
    for (let i = 0; i < n; ++i) {
        result[i] = iteratee(i);
    }
    return result;
}
exports.times = times;
