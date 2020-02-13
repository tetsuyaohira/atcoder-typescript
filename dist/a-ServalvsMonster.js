"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var input = fs.readFileSync("/dev/stdin", "utf8").split(" ");
var h = +input[0];
var a = +input[1];
console.log(Math.ceil(h / a));
//# sourceMappingURL=a-ServalvsMonster.js.map