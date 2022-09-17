import {readFileSync} from "fs";

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [n, p, q, r]: number[] = args[0].split(' ').map(Number)
const a: number[] = args[1].split(' ').map(Number)

let total: number = 0
const accumulate: number[] = a.map((val, idx) => {
    total += val
    return total
})

const accSet = new Set([0, ...accumulate]);
const ans = Array.from(accSet).some((val) => {
    return accSet.has(val+p) && accSet.has(val+p+q) && accSet.has(val+p+q+r)
})

console.log(ans ? 'Yes' : 'No')
