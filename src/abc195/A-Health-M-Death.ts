import {readFileSync} from 'fs';

const [m, h]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
const ans: string = (h % m === 0) ? 'Yes' : 'No';
console.log(ans);
