import {readFileSync} from "fs";

const s: string = readFileSync('/dev/stdin', 'utf8').trim();

const shiftCnt: number = s.length - 1;

let min: string = s;
let max: string = s;

let wk: string = s;
for (let i = 0; i < shiftCnt; i++) {

    wk = wk.slice(1) + wk.slice(0, 1);
    if (min > wk) {
        min = wk;
    }
    if (max < wk) {
        max = wk;
    }
}

console.log(min);
console.log(max);

