import {readFileSync} from 'fs';

const [a, b, c]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
const ans :string= Math.pow(a, 2) + Math.pow(b, 2) < Math.pow(c, 2)?'Yes':'No';
console.log(ans);