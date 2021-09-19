import {readFileSync} from 'fs';

const [n, a, x, y]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

// 10 5 4 3
if (n <= a) {
    console.log(n * x);
} else {
    console.log(a * x + (n - a) * y);
}
