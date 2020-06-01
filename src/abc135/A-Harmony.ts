import * as fs from 'fs';

//in
// 2 16
//out
// 9
const main = (inp: string) => {
    const [a, b]: number[] = inp.split(' ').map(Number);
    let cap: number = 0;

    if ((a + b) % 2 == 1) {
        console.log('IMPOSSIBLE');
    } else {
        console.log((a + b) / 2);
    }
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
