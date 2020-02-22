import * as fs from 'fs';

//in
//
//out
//
const main = (inp: string) => {
    const [a, b]: number[] = inp.split(' ').map(Number);

    if (a > 9 || b > 9) {
        console.log(-1);
    } else {
        console.log(a * b);
    }

};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());