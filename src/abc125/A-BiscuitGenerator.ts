import * as fs from 'fs';

//in
// 3 5 7
//out
// 10
const main = (inp: string) => {
    const [a, b, t] = inp.split(' ').map(Number);
    console.log(Math.floor(t / a) * b);

};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
