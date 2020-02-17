import * as fs from 'fs';

//in
// 10
// ZABCDBABCQ
//out
// 2
function main(inp: string): void {
    const n: number = parseInt(inp.split('\n')[0]);
    const s: string = inp.split('\n')[1];

    let ans: number = 0;
    let idx: number = 0;
    while (s.indexOf('ABC', idx) > -1) {
        ans++;
        idx = s.indexOf('ABC', idx) +1;
    }
    console.log(ans);
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
