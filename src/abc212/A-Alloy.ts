import {readFileSync} from "fs";

const [a, b]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

if (a > 0 && b === 0) console.log('Gold');
if (a === 0 && b > 0) console.log('Silver');
if (a > 0 && b > 0) console.log('Alloy');