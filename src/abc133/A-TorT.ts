import * as fs from 'fs';

// 4 2 9
// 8
const main = (inp: string) => {
    const [n, a, b]: number[] = inp.split(' ').map(Number);
    const train: number = n * a;
    const taxi: number = b;
    console.log(train < taxi ? train : taxi);
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
