import * as fs from 'fs';

const [a, b]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

if (a + b > 23) {
    console.log(a + b - 24);
} else {
    console.log(a + b);
}
