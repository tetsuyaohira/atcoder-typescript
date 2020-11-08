import * as fs from 'fs';

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const s: string[] = args[0].split('');
const t: string[] = args[1].split('');

let ans: number = 0;
for (let i: number = 0; i < s.length; i++) {
    if (s[i] !== t[i]) ans++;
}
console.log(ans);

