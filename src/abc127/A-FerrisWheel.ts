import * as fs from 'fs';

const main = (inp: string) => {

    const [a, b]: number[] = inp.split(' ').map(Number);

    // 13才以上B円
    // 6才以上12才以下半額
    // 5才以下無料
    if (a >= 13) {
        console.log(b);
    } else if (a >= 6 && a <= 12) {
        console.log(b / 2);
    } else {
        console.log(0);
    }

};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
