import * as fs from 'fs';

//in
// 3
// 3 1 2
//out
// 11
const main = (inp: string) => {
    const n: number = parseInt(inp.split('\n')[0]);
    const d: number[] = inp.split('\n')[1].split(' ').map(a => parseInt(a));

    let cur: number = 1;
    let ans: number = 0;
    for (let i: number = 0; i < n; i++) {
        for (let j: number = cur; j < n; j++) {
            ans += d[i] * d[j];
        }
        cur++;
    }
    console.log(ans);
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
