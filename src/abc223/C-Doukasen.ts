import {readFileSync} from "fs";

const args: string[] =
    readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const n: number = +args[0];
const a: number[] = [];
const b: number[] = [];
for (let i = 1; i <= n; i++) {
    a.push(+args[i].split(' ')[0]);
    b.push(+args[i].split(' ')[1]);
}

let t: number = 0;
for (let i = 0; i < n; i++) {
    t += a[i] / b[i];
}
t = t / 2;
let ans: number = 0;
for (let i = 0; i < n; i++) {
    const ti: number = a[i] / b[i];
    if (ti > t) {
        ans += b[i] * t;
        break;
    }
    ans += a[i];
    t -= ti;
}
console.log(ans);
