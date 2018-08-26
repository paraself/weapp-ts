"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const identity_1 = require("../util/identity");
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is provided, it determines the cache key for storing the result based on the arguments provided to the memoized function. By default, the first argument provided to the memoized function is used as the map cache key. The `func` is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized function.
 *
 * Differences from lodash:
 * - does not coerce keys to a string; any object can be used as in an ES6 `Map`
 * - does not let you customize cache creation
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 3,920 bytes
 * - Micro-dash: 218 bytes
 */
function memoize(func, resolver = identity_1.identity) {
    const memoized = function () {
        const cache = memoized.cache;
        const key = resolver.apply(this, arguments);
        if (cache.has(key)) {
            return cache.get(key);
        }
        else {
            const value = func.apply(this, arguments);
            cache.set(key, value);
            return value;
        }
    };
    memoized.cache = new Map();
    return memoized;
}
exports.memoize = memoize;