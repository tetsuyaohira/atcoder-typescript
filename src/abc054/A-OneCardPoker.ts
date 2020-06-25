import * as fs from 'fs';

const [a, b]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);


function main(): string {
    if (a === b) return 'Draw';
    if (a === 1) return 'Alice';
    if (b === 1) return 'Bob';
    if (a > b) {
        return 'Alice';
    } else {
        return 'Bob';
    }
}

console.log(main());