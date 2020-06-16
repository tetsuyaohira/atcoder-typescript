import * as fs from 'fs';

const x: string = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').join('');
console.log(x.indexOf('0') + 1);
