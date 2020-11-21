import * as fs from 'fs';
const x: number = Number(fs.readFileSync('/dev/stdin', 'utf8').trim());
console.log(x >= 0 ? x : 0);
