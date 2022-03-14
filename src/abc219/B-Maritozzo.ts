import {readFileSync} from "fs";

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const s: string[] = [args[0], args[1], args[2]];
const t: string = args[3];

let ans: string = '';
t.split('').forEach(value => {
    ans += s[+value-1];
})

console.log(ans);
