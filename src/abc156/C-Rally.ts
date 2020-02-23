import * as fs from 'fs';

//in
// 2
// 1 4
//out
// 5
const main = (inp: string) => {
    // (xi -p)2
    const n = parseInt(inp.split('\n')[0]);
    const x: number[] = inp.split('\n')[1].split(' ').map(Number);
    let ans: number = Number.MAX_VALUE;
    let tmp: number = 0;
    for (let i: number = Math.min(...x); i <= Math.max(...x); i++) {
        tmp = 0;

        tmp = x.reduce((acc :number, cur :number,)=>{return acc + cur;})
        if (ans >= tmp) {
            ans = tmp;
        }
    }
    console.log(ans);
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
