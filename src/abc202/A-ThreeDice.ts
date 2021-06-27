import {readFileSync} from 'fs';

const [a, b, c]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

console.log(7 - a + 7 - b + 7 - c);