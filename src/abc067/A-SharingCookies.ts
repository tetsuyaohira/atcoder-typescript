import * as fs from 'fs';

const [a, b]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

if (a % 3 === 0) {
    console.log('Possible');
} else if (b % 3 === 0) {
    console.log('Possible');
} else if ((a + b) % 3 === 0) {
    console.log('Possible');
} else {
    console.log('Impossible');
}
