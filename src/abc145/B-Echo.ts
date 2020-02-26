import * as fs from 'fs';

//in
// 6
// abcabc
//out
// Yes
const main = (inp: string) => {

    const n: number = parseInt(inp.split('\n')[0]);
    const s: string = inp.split('\n')[1];

    if (n % 2 === 1) {
        console.log('No');
        return;
    }

    if (s.substr(0, n / 2) === s.substr(n / 2)) {
        console.log('Yes');
    } else {
        console.log('No');
    }
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
