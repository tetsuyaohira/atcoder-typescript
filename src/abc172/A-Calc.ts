import * as fs from 'fs';

const a: number = +fs.readFileSync('/dev/stdin', 'utf8').trim();
const ans: number = a + Math.pow(a, 2) + Math.pow(a, 3);
console.log(ans);
