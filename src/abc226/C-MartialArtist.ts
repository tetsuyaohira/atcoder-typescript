import {readFileSync} from "fs"

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n')
const n: number = +args[0]

const t: number[][] = args.slice(1).map(value => value.split(' ').map(Number))
const set = new Set();

const ans: number = getTime(t[n - 1])

console.log(ans)

function getTime(tka: number[]): number {

    // console.log(tka)
    const t1: number = tka[0]
    const k1: number = tka[1]

    let time: number = t1
    if (k1 === 0) return time

    for (let i = 0; i < k1; i++) {
        if (!set.has(tka[i + 2])) {
            set.add(tka[i + 2]);
            time += getTime(t[tka[i + 2] - 1])
        }
    }

    return time
}







