import * as fs from 'fs';
const n : string = fs.readFileSync('/dev/stdin','utf8').trim();
console.log('ABC' + ('000'+n).slice(-3));