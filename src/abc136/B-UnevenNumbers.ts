import * as fs from 'fs';

//in
//
//out
//
const main = (inp: string) => {
    let n: number = parseInt(inp);
    let ans: number = 0;
    while (n > 0) {
        if (n.toString().length % 2 === 1) {
            ans++;
        }
        n--;
    }
    console.log(ans);
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
