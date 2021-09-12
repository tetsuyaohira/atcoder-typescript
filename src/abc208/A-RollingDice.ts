import {readFileSync} from 'fs';

const [a,b]:number[] = readFileSync('/dev/stdin','utf8').trim().split(' ').map(Number);

// 3 2
const ans: string = (a <= b && a * 6 >= b) ? 'Yes' : 'No';

console.log(ans);
