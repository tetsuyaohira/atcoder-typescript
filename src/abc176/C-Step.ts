import {readFileSync} from "fs"

const input = readFileSync(0, "utf8").trim().split("\n")

const n: number = +input[0]
const a: number[] = input[1].split(" ").map(Number)

let ans: number = 0;
let max:number = 0
for (let i = 0; i < n; i++) {
    let wk:number = a[i]
    max = Math.max(max,wk)

    if (wk < max){
        ans += max -wk
    }
}

console.log(ans)