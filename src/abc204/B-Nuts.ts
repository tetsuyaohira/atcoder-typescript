import {read, readFileSync} from 'fs';

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n: number = parseInt(args[0], 10);
const a: number[] = args[1].split(' ').map(Number);

const ans: number = a.reduce((acc, cur) => {
    return acc + (cur > 10 ? cur - 10 : 0);
}, 0);

console.log(ans);
