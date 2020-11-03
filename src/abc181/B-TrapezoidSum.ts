import * as fs from 'fs';

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n: number = +args[0];

let ans: number = 0;
for (let i = 1; i <= n; i++) {
    const a: number[] = args[i].split(' ').map(Number);

    for (let ii = a[0]; ii <= a[1]; ii++) {
        ans+=ii;
    }
    // ans += a.reduce((previosValue, currentValue) => {
    //     return previosValue + currentValue;
    // }, 0);
}
console.log(ans);

