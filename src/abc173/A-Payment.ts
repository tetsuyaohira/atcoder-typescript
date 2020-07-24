import * as fs from 'fs';

const n: number = +fs.readFileSync('/dev/stdin', 'utf8');
const ans: number = Math.ceil(n / 1000) * 1000 - n;
console.log(ans);
