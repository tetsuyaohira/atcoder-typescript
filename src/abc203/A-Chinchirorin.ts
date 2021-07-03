import {readFileSync} from 'fs';

const [a, b, c]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
// 1 2 1   0

if (a === b) {
    console.log(c);
} else if (a === c) {
    console.log(b);
} else if (b === c) {
    console.log(a);
} else {
    console.log(0);
}

