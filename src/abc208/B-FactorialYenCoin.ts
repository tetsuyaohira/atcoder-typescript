import {readFileSync} from "fs";

const p: number = parseInt(readFileSync('/dev/stdin', 'utf8').trim(), 10);

let ans: number = 0;
let wk: number = p;
for (let i = 10; i > 0; i--) {
    let i_cnt = 100;
    while (wk >= factorial(i) && i_cnt > 0) {
        wk -= factorial(i);
        ans++;
        i_cnt--;
    }
}
console.log(ans);

function factorial(num: number): number {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}