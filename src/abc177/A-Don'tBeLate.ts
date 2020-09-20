import * as fs from 'fs';


const [d, t, s]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
console.log((d / s <= t) ? 'Yes' : 'No');
