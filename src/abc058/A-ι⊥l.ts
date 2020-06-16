import * as fs from 'fs';

const [a, b, c]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
// b-a=c-b
const ans: string = (b - a === c - b) ? 'YES' : 'NO';
console.log(ans);