import {readFileSync} from 'fs';

const [a, b]:number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
const ans = (a - b) / a * 100;
console.log(ans);
