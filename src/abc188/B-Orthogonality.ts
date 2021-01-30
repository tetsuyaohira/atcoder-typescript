import * as fs from 'fs';

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const a: number[] = args[1].split(' ').map(Number);
const b: number[] = args[2].split(' ').map(Number);

let wk: number = 0;

for (let i = 0; i < a.length; i++) {
    wk = wk + (a[i] * b[i]);
}

if (wk === 0) {
    console.log('Yes');
} else {
    console.log('No');
}