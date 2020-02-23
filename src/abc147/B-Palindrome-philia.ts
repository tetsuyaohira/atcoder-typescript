import * as fs from 'fs';

//in
// abcdabc
//out
// 2
const main = (inp: string) => {
    let ans: number = 0;

    for (let i = 0; i < Math.floor(inp.length / 2); i++) {
        if (inp[i] !== inp[inp.length - i - 1]) {
            ans++;
        }
    }
    console.log(ans);
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
