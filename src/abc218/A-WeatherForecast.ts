import {readFileSync} from "fs";

const args: string[] = readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const n: number = +args[0];
const s: string = args[1];

if (s[n - 1] === 'o') {
    console.log('Yes');
} else {
    console.log('No');
}