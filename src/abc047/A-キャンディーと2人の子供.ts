import * as fs from 'fs';

const [a, b, c]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

if (a + b === c) {
    console.log('Yes');
} else if (a === b + c) {
    console.log('Yes');
} else if (a + c === b) {
    console.log('Yes');
} else {
    console.log('No');
}
