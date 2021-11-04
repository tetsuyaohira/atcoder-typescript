import {readFileSync} from "fs";

const [s, t]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

let ans: number = 0;
for (let i = 0; i <= 100; i++) {
    for (let j = 0; j <= 100; j++) {
        for (let l = 0; l <= 100; l++) {
            if ((i + j + l) <= s && (i * j * l) <= t) {
                ans++;
            }
        }
    }
}
console.log(ans);