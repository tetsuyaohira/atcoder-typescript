import * as fs from 'fs';

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const a: number = +args[0].split(' ')[0];
const b: number = +args[0].split(' ')[1];
const c: number = +args[1].split(' ')[0];
const d: number = +args[1].split(' ')[1];

console.log((a * d) - (b * c));
