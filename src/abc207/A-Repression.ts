import {readFileSync} from "fs";

const abc: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
abc.sort((a, b) => a - b);
console.log(abc[1] + abc[2]);
