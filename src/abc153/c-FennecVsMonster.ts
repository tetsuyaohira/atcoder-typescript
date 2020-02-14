import * as fs from 'fs';

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const n: number = parseInt(input[0].split(' ')[0]);
let k: number = parseInt(input[0].split(' ')[1]);
const h: number[] = input[1].split(' ').map(n => parseInt(n)).sort((a, b) => b - a);

// 3 1
// 4 1 5
// 5
let result: number = 0;

if (k < h.length) {
    for (let i: number = 0; i < n; i++) {
        if (k > 0) {
            // 必殺技
            k -= 1;
            continue;
        }

        // 攻撃
        result += h[i];
    }
}
console.log(result);
