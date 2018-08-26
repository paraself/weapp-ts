"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function partial(func, ...partials) {
    return func.bind(undefined, ...partials);
}
exports.partial = partial;
