"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls to the function return the value of the first invocation. The `func` is invoked with the `this` binding and arguments of the created function.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 1,421 bytes
 * - Micro-dash: 60 bytes
 */
function once(func) {
    let result;
    let needsCall = true;
    return function () {
        if (needsCall) {
            needsCall = false;
            result = func.apply(this, arguments);
        }
        return result;
    };
}
exports.once = once;
