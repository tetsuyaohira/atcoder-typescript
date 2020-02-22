import * as fs from 'fs';

//in
//
//out
//
const main = (inp: string) => {

    const [a, b]: number[] = inp.split(' ').map(Number);
    if (a < b * 2) {
        console.log(0);
    } else {
        console.log(a - b * 2);
    }
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());