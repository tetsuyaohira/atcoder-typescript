import {readFileSync} from 'fs';

const [x, y]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

if (x === y) {
    console.log(x);
} else {
    console.log(3 - (x + y));
}