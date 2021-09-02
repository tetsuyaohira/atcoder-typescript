import { readFileSync } from 'fs';

const [a, b]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

if (a > b) {
    console.log(0);
} else {
    console.log(b - a + 1);
}
