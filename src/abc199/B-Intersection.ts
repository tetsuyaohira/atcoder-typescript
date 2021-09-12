import {readFileSync} from 'fs';

const args: string [] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const a: number[] = args[1].split(' ').map(Number);
const b: number[] = args[2].split(' ').map(Number);

const maxOfA: number = Math.max(...a);
const maxOfB: number = Math.min(...b);

const ans = (maxOfB - maxOfA +1 > 0) ? maxOfB - maxOfA +1: 0;
console.log(ans);