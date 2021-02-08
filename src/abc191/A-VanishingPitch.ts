import * as fs from 'fs';

const [v, t, s, d]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
if ((v * t) <= d && (v * s) >= d) {
    console.log('No');
} else {
    console.log('Yes');
}