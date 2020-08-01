import * as fs from 'fs';
const [a, b, c, d]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
console.log(Math.max(a * b, c * d));

