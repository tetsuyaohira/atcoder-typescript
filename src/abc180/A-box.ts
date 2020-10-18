import * as fs from 'fs';

const [n, a, b]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

console.log(n - a + b);