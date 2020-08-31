import * as fs from 'fs';

const x: number = +fs.readFileSync('/dev/stdin', 'utf8').trim();
console.log(x < 1200 ? 'ABC' : 'ARC');
