import {readFileSync} from 'fs';

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b]: number[] = args[0].split(' ').map(Number);
const [c, d]: number[] = args[1].split(' ').map(Number);

const ans: number = Math.max(a - c, a - d, b - c, b - d);

console.log(ans);