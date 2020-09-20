import * as fs from 'fs';
const [n, x, t]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
const a: number = Math.ceil(n / x);
console.log(a*t );