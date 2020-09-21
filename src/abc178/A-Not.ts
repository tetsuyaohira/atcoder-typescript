import * as fs from 'fs';

const x: number = parseInt(fs.readFileSync('/dev/stdin', 'utf8').trim(), 10);
console.log(x===0?1:0);

