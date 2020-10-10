import * as fs from 'fs';

const args: String[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const n: number = +args[0];
let ac: number = 0;
let wa: number = 0;
let tle: number = 0;
let re: number = 0;

for (let i = 1; i <= n; i++) {

    if (args[i] === 'AC') ac++;
    if (args[i] === 'WA') wa++;
    if (args[i] === 'TLE') tle++;
    if (args[i] === 'RE') re++;
}

console.log(`AC x ${ac}`);
console.log(`WA x ${wa}`);
console.log(`TLE x ${tle}`);
console.log(`RE x ${re}`);
