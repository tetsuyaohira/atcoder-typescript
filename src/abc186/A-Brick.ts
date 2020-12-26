import * as fs from 'fs';

const [n, w]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

console.log(Math.floor(n/w));
