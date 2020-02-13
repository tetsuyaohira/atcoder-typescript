import * as fs from 'fs'

// 210 5
// 31 41 59 26 53
const input: string[] = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
const line1: string = input[0];
const line2: string = input[1];
let h: number = parseInt(line1.split(' ')[0], 10);
const n: number = parseInt(line1.split(' ')[1], 10);

const tech = line2.split(' ').map(n => parseInt(n, 10));
for (let i: number = 0; i < tech.length; i++) {
    h -= tech[i];
}

if (h <= 0) {
    console.log('Yes');
} else {
    console.log('No');
}

