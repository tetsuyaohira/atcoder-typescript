import * as fs from 'fs';

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const a: number[] = args[1].split(' ').map(Number);
const aMax: number = Math.max(...a);
let gcd: number = 0;
let ans: number = 0;


for (let j = 2; j <= aMax; j++) {

    let currentGCD = 0;
    for (let i = 0; i <= a.length; i++) {
        if (a[i] % j === 0) {
            currentGCD++;
        }
    }

    if (gcd < currentGCD) {
        gcd = currentGCD;
        ans = j;
    }
}
console.log(ans);