import {readFileSync} from "fs";

const n: number = parseInt(readFileSync('/dev/stdin', 'utf8').trim(), 10);
let ans = 1;
let wk = 0;
while (true) {
    wk += ans;
    if (wk >= n) {
        break;
    }
    ans++;
}
console.log(ans);