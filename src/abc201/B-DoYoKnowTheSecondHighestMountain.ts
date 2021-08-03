import {readFileSync} from 'fs';

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n: number = +args[0];

let heights: number[] = [];
for (let i = 1; i <= n; i++) {
    const name: string = args[i].split(' ')[0];
    const height: number = parseInt(args[i].split(' ')[1]);
    heights.push(height);
}
heights.sort((a, b) => a - b);
const secondHighest: number = heights[heights.length - 2];

for (let i = 1; i <= n; i++) {
    const name: string = args[i].split(' ')[0];
    const height: number = parseInt(args[i].split(' ')[1]);
    if (height === secondHighest) {
        console.log(name);
        break;
    }
}


