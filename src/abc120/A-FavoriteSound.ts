import * as fs from 'fs';

//in
// 2 11 4
//out
// 4
const main = (inp: string) => {
    const [a, b, c]: number[] = inp.split(' ').map(Number);
    if (b / a > c) {
        console.log(c);
    } else {
        console.log(Math.floor(b / a));
    }
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
