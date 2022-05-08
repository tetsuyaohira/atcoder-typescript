import {readFileSync} from "fs";

const [k, ab]: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b]: string[] = ab.split(' ');

const a10 = parseInt(a, +k);
const b10 = parseInt(b, +k);

console.log(a10 * b10);
