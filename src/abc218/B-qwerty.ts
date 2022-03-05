import {readFileSync} from "fs";

const p: number[] = readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const abc: string[] = ['/', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let ans: string = '';
p.forEach(value => {
    ans += abc[value];
});

console.log(ans);