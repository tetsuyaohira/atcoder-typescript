import * as fs from 'fs';

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [m, n, c]: number[] = args[0].split(' ').map(Number);
const b: number[] = args[1].split(' ').map(Number);

// console.log(b)
let ans: number = 0;
for (let i: number = 0; i < m; i++) {
    const a: number[] = args[i + 2].split(' ').map(Number);
    // console.log(a);
    let wk: number = 0;
    for (let j: number = 0; j < n; j++) {
        wk += (a[j] * b[j]);
        // console.log(wk);
    }
    // console.log('---------');
    // console.log(wk);
    if (wk + c > 0) ans++;
}
console.log(ans);