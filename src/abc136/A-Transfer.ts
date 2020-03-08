import * as fs from 'fs';

//in
// 6 4 3
//out
// 1
const main = (inp: string) => {
    const [a, b, c]: number[] = inp.split(' ').map(Number);
    let ans: number = c - (a - b);
    if (ans < 0) {
        ans = 0;
    }
    console.log(ans);
};


main(fs.readFileSync('/dev/stdin', 'utf8').trim());