import * as fs from 'fs';

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, x]: number[] = args[0].split(' ').map(Number);
const s: string = args[1];
const ans: number = s.split('').reduce((prev: number, curr: string): number => {
    if (curr === 'o') return prev += 1;
    if (curr === 'x' && prev > 0) return prev -= 1;
    return prev;
}, x);
console.log(ans);
