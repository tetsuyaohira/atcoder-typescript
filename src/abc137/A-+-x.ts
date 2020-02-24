import * as fs from 'fs';

//in
//
//out
//
const main = (inp: string) => {
    const [a, b]: number[] = inp.split(' ').map(Number);
    // a+b
    // a-b
    // a*b
    const ans1: number = a + b;
    const ans2: number = a - b;
    const ans3: number = a * b;

    console.log(Math.max(ans1,ans2,ans3));

    // if (ans1 >= ans2 && ans1 >= ans3) {
    //     console.log(ans1);
    // }
    // if (ans2 >= ans1 && ans2 >= ans3) {
    //     console.log(ans2);
    // }
    // if (ans3 >= ans1 && ans3 >= ans2) {
    //     console.log(ans3);
    // }

};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());