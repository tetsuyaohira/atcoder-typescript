import * as fs from 'fs';
const [n, m]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
const ans :number = (n - 1) * (m - 1)
console.log(ans);
