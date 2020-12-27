import * as fs from 'fs';

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [h, w]: number[] = args[0].split(' ').map(Number);

let min: number = 100;
for (let i = 1; i <= h; i++) {
    min = Math.min(min, ...args[i].split(' ').map(Number));
}
// console.log(min);
let ans: number = 0;
for (let i = 1; i <= h; i++) {
    // console.log(args[i]);
    args[i].split(' ').map(Number).forEach((value: number) => {
        // console.log(value);
        ans += value - min;
    })
}
console.log(ans);
