import {readFileSync} from "fs";

const n: number = parseInt(readFileSync('/dev/stdin', 'utf8').trim(), 10);

const century = Math.floor((n - 1) / 100 + 1);
console.log(century);

