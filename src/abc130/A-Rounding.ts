import * as fs from 'fs';

//in
// 3 5
//out
// 0
const main = (inp: string) => {
    const [x, a]: number[] = inp.split(' ').map(Number);

    if (x < a) {
        console.log(0);
    } else {
        console.log(10);
    }
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());