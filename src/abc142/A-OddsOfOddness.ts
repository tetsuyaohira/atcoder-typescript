import * as fs from 'fs';

//in
// 4
//out
// 0.5
const main = (inp: string) => {

    const n = parseInt(inp);

    if (n % 2 === 0) {
        console.log(n / 2 / n);
    } else {
        console.log((n + 1) / 2 / n);
    }
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());