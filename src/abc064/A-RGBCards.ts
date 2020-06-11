import * as fs from 'fs';

const [r, g, b]: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');
const num: number = parseInt(r + g + b, 10);
const ans: string = (num % 4 === 0) ? 'YES' : 'NO';
console.log(ans);
