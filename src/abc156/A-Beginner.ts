import * as fs from 'fs';

//in
// 2 2919
//out
// 3719
const main = (inp: string) => {
    // 100 * (10-k)
    const [n, r]: number[] = inp.split(' ').map(Number);
    if (r === 0) {
        console.log(0);
    } else if (n >= 10) {
        console.log(r);
    } else {
        console.log(r + (100 * (10 - n)));
    }
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
