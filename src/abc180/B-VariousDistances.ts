import * as fs from 'fs';

const args: String[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n: number = +args[0];
const xn: number[] = args[1].split(' ').map(Number);

const m: number = xn.reduce((previousValue: number, currentValue: number) => {
    return previousValue + Math.abs(currentValue);
}, 0);

const y: number = xn.reduce((previousValue: number, currentValue: number) => {
    return previousValue + Math.pow(Math.abs(currentValue), 2);
}, 0);
const y2: number = Math.sqrt(y);

const xn2: number[] = xn.map((x: number) => {
    return Math.abs(x);
});
const c: number = Math.max(...xn2);

console.log(m);
console.log(y2);
console.log(c);