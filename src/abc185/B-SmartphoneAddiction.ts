import {readFileSync} from 'fs';

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [n, m, t]: number[] = args[0].split(' ').map(Number);
let life: number = n;
let before = 0;
for (let i: number = 1; i <= m; i++) {
    const [a, b]: number[] = args[i].split(' ').map(Number);

    // 消費
    life -= (a - before);
    if (life <= 0) {
        break;
    }

    // 回復
    life += (b - a);
    if (life > n) life = n;

    before = b;
}

// 消費
life -= (t - before);

if (life > 0) {
    console.log('Yes');
} else {
    console.log('No');
}
