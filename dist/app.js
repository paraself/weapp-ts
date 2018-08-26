"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("./plugins/lodash/index"));
class WeappApp {
    onLaunch(info) {
        Promise.resolve().then(() => {
            console.log('init');
            console.log(_.camelCase('I Love PTE'));
        });
    }
    onShow(info) {
    }
}
let app = new WeappApp();
App(app);
// const appParam: WeApp.AppParam = {
//   onLaunch(info) {
//   }
// }
