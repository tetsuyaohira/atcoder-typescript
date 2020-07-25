import * as fs from 'fs';

const [a, b]: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');

// H H H
// H G G
// G H G
// G G H


if (a === b) {
    console.log('H');
} else {
    console.log('D');
}