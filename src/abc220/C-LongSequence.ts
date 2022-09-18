import {readFileSync} from "fs";

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n')
const n: bigint = BigInt(args[0])
const a: bigint[] = args[1].split(' ').map(BigInt)
const x: bigint = BigInt(args [2])

const a_sum: bigint = a.reduce((previous: bigint, current: bigint) => previous + current)


let ans: bigint = BigInt(Math.floor(Number(x / a_sum)))
let amari: bigint = x % a_sum

for (let i = 0; i < a.length; i++) {
    amari -= a[i]
    if (amari < 0) {
        ans = (ans * BigInt(a.length)) + BigInt(i) + BigInt(1)
        console.log(ans.toString())
        break
    }
}

