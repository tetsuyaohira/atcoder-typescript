import {readFileSync} from "fs";

const [a, b]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

console.log(32 ** (a - b));
