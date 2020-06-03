import * as fs from 'fs';

const [x, a, b]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
if (Math.abs(x - a) < Math.abs(x - b)) {
    console.log('A');
} else {
    console.log('B');
}
