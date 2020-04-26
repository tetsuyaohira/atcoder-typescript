import * as fs from 'fs';

const main = (inp: string) => {
    let ans: string = 'Yes';
    for (let i: number = 0; i < inp.length; i++) {
        if ((i + 1) % 2 === 1) {
            // only R U D
            if (inp[i] === 'L') {
                ans = 'No';
                break;
            }
        } else {
            // only L U D
            if (inp[i] === 'R') {
                ans = 'No';
                break;
            }
        }
    }
    console.log(ans);
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
