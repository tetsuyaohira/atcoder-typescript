import * as fs from 'fs';

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');
const a: number = parseInt(args[0]);
const op: string = args[1];
const b: number = parseInt(args[2]);

if (op === '+') {
    console.log(a + b);
}
if (op === '-') {
    console.log(a - b);
}
