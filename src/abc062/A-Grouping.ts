import * as fs from 'fs';

const [x, y]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

const group1: number[] = [1, 3, 5, 7, 8, 10, 12];
const group2: number[] = [4, 6, 9, 11];

if (x === 2 || y === 2) {
    console.log('No');
} else {

    if (group1.find(g => g === x) && group1.find(g => g === y)) {
        console.log('Yes');
    } else if (group2.find(g => g === x) && group2.find(g => g === y)) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}