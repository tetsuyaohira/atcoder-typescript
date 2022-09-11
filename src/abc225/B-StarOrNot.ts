import {readFileSync} from "fs";

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n')
const n: number = +args[0]
const [a, b]: number[] = args[1].split(' ').map(Number)
const ab: number[][] = args.slice(2).map((r: string) => r.split(' ').map(Number))

const ans1: boolean = ab.every((r: number[]) => {
    return r[0] === a || r[1] === a
})
const ans2: boolean = ab.every((r: number[]) => {
    return r[0] === b || r[1] === b
})

console.log(ans1 || ans2 ? 'Yes' : 'No')

