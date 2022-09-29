import {readFileSync} from "fs"


const n: bigint = BigInt(readFileSync(0, "utf8").trim())

let wk:bigint = n

const ans: string[] = []

while (wk > 0) {
    // @ts-ignore
    if (wk % 2n === 0n) {
        ans.push('B')
        // @ts-ignore
        wk = wk / 2n
    } else {
        ans.push('A')
        // @ts-ignore
        wk = wk - 1n
    }
}

console.log(ans.reverse().join(''))