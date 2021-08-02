import {readFileSync} from "fs";

const [n, k]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

let ans:number =0;
for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= k; j++) {
        ans += parseInt(i.toString()+'0'+j.toString(),10);
    }
}

console.log(ans);