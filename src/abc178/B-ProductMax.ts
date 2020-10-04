import * as fs from 'fs';

const [a, b, c, d]: bigint[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(x => BigInt(x));
let ans = a * c;
if (a * d > ans) ans = a * d;
if (b * c > ans) ans = b * c;
if (b * d > ans) ans = b * d;
console.log(String(ans));
