import * as fs from 'fs';

const s: string = fs.readFileSync('/dev/stdin', 'utf8').trim();

let ans = '';
s.split('').forEach((value, index) => {
    if (index % 2 === 0) {
        ans += value;
    }
})

console.log(ans);
