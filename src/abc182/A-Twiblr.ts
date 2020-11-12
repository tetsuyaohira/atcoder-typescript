import * as fs from 'fs';

const [a, b]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
console.log((a*2+100)-b);
