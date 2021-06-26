import {readFileSync} from 'fs';

// const [a1, a2, a3]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
const a: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
a.sort(function (a, b) {
    return a - b;
});
const ans = (a[1] - a[0] === a[2] - a[1]) ? 'Yes' : 'No';
console.log(ans);