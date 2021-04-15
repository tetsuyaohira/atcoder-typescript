import {readFileSync} from 'fs';
const n :number = +readFileSync('/dev/stdin','utf8').trim();
console.log(n-1);