import * as fs from 'fs';

//in
// SAT
//out
// 1
const main = (inp: string) => {
    const weeks: { [s: string]: number } = {
        SUN: 7,
        MON: 6,
        TUE: 5,
        WED: 4,
        THU: 3,
        FRI: 2,
        SAT: 1
    };

    console.log(weeks[inp]);

};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());