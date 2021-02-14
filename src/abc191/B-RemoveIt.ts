import * as fs from 'fs';

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, x]: number[] = args[0].split(' ').map(Number);
const a: number[] = args[1].split(' ').map(Number);

let ans: string = a.filter(value => value !== x).join(' ');
console.log(ans);

