import * as fs from 'fs';

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const h: number = +args[0].split(' ')[0];
const w: number = +args[0].split(' ')[1];

const s: String[][] = args.map((x) => x.split(''));
// console.log(s);

let ans: number = 0;

for (let j = 1; j <= h; j++) {
    for (let i = 0; i <= w; i++) {
        if (s[j][i] === '.' && s[j][i + 1] === '.') ans++;

        if (j !== h) {
            if (s[j][i] === '.' && s[j + 1][i] === '.') ans++;
        }
    }
}

console.log(ans);

