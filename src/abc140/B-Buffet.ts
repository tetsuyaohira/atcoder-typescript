import * as fs from 'fs';

//in
// 3
// 3 1 2
// 2 5 4
// 3 6
//out
// 14
const main = (inp: string) => {

    const n: number = parseInt(inp.split('\n')[0]);
    const a: number[] = inp.split('\n')[1].split(' ').map(Number);
    const b: number[] = inp.split('\n')[2].split(' ').map(Number);
    const c: number[] = inp.split('\n')[3].split(' ').map(Number);

    let prevVal: number = -1;
    let ans: number = 0;
    a.map((val) => {
        ans += b[val - 1];
        if (prevVal === val - 1) {
            ans += c[prevVal - 1];
        }
        prevVal = val;
    });
    console.log(ans);
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
