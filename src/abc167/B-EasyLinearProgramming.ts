import * as fs from 'fs';

const [a, b, c, k]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')[0].split(' ').map(Number);
let ans: number;
ans = (a >= k) ? k : a;
const kk = (a + b >= k) ? 0 : k - (a + b);
ans -= (c >= kk) ? kk : c;
console.log(ans);



