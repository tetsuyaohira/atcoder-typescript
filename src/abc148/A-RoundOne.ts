import * as fs from 'fs';

//in
// 3
// 1
//out
// 2
function main(inp: string) {

    const [a, b]: number[] = inp.split('\n').map(Number);
    // 1 2  3
    // 2 1  3
    // 1 3  2
    // 3 1  2
    // 2 3  1
    // 3 2  1
    console.log(6 - (a + b));
}

main(fs.readFileSync('/dev/stdin', 'utf8').trim());