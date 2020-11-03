import * as fs from 'fs';

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n: number = +args[0];

let ans: number = 0;
for (let i = 1; i <= n; i++) {
    const a: number[] = args[i].split(' ').map(Number);
    ans += (a[1] - a[0] + 1) * (a[0] + a[1]) / 2;
}
console.log(ans);

