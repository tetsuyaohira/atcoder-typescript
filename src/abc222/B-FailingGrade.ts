import {readFileSync} from "fs";

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [n, p]: number[] = args[0].split(' ').map(Number);
const a: number[] = args[1].split(' ').map(Number);

// aからpより小さい数を探す
let ans: number = 0;
for (let i = 0; i < n; i++) {
    if (a[i] < p) {
        ans++;
    }
}

console.log(ans);