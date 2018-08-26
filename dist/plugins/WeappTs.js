"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./bluebird/index"));
var WeappTs;
(function (WeappTs) {
    function init() {
        // @ts-ignore:
        Promise = index_1.default;
    }
})(WeappTs || (WeappTs = {}));
exports.default = WeappTs;
