import {readFileSync} from 'fs';

// 3
// 3 9 5
// 4 8 5
// 5 7 5

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let ans: number = Infinity;
for (let i = 1; i < args.length; i++) {
    const [a, p, x]: number[] = args[i].split(' ').map(Number);
    if (x - a <= 0) continue;
    if (ans > p) ans = p;
}

if (ans === Infinity) {
    console.log(-1);
} else {
    console.log(ans);
}

