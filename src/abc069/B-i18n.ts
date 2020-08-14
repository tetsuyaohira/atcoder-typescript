import * as fs from 'fs';

const s: string = fs.readFileSync('/dev/stdin', 'utf8').trim();
console.log(s.substring(0, 1) + (s.length - 2).toString() + s.substring(s.length - 1));