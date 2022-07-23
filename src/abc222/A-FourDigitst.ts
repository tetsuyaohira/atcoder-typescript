import {readFileSync} from "fs";

const n: string = readFileSync('/dev/stdin', 'utf8').trim();

// nの先頭に0をつけて、4桁にする by github copilot
const n4 = '0'.repeat(4 - n.length) + n;
console.log(n4);


