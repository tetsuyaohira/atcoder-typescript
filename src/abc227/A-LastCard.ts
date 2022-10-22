import {readFileSync} from "fs";

const [n, k, a]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number)
let ans = (a + k - 1) % n
if (ans === 0) {
    ans = n
}

console.log(ans)
