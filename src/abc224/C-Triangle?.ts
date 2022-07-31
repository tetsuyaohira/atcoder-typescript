import {readFileSync} from "fs";

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n: number = +args[0];
const x: bigint[] = [];
const y: bigint[] = [];
for (let i = 0; i < n; i++) {
    x.push(BigInt(args[i + 1].split(' ')[0]));
    y.push(BigInt(args[i + 1].split(' ')[1]));
}
let ans: number = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        for (let k = 0; k < j; k++) {

            // console.log(i, j, k);
            const xa: bigint = x[j] - x[i];
            const ya: bigint = y[j] - y[i];
            const xb = x[k] - x[i];
            const yb = y[k] - y[i];

            if (xa * yb !== xb * ya) {
                ans++;
            }
        }
    }
}

console.log(ans);
