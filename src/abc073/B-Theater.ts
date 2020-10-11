import * as fs from 'fs';

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n: number = +args[0];
let ans: number = 0;
for (let i = 1; i <= n; i++) {
    const l: number = +args[i].split(' ')[0];
    const r: number = +args[i].split(' ')[1];
    ans += r - l + 1;
}
console.log(ans);
