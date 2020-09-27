import * as fs from 'fs';

const n: string = fs.readFileSync('/dev/stdin', 'utf8').trim();

let sum: number = 0;
n.split('').forEach((x: string) => {
    sum += parseInt(x)
});

console.log(sum % 9 === 0 ? 'Yes': 'No');
