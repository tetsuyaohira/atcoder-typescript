import * as fs from 'fs';

const input: string = fs.readFileSync('/dev/stdin', 'utf8').trim();
const [a, b]: number[] = input.split(' ').map(Number);

console.log(Math.abs(a - b) <= 2 ? 'Yes' : 'No');
