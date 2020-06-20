import * as fs from 'fs';

const n: number = +fs.readFileSync('/dev/stdin', 'utf8').trim();
console.log(n * 800 - (Math.floor(n / 15)*200));
