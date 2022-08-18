import {readFileSync} from "fs"

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n')
const n: number = +args[0]

const t: number[][] = args.slice(1).map(value => value.split(' ').map(Number))
const need = new Set<Number>();
need.add(n);
for (let i = n; i > 0; i--) {
    if (need.has(i)) {
        for (let j = 0; j < t[i - 1][1]; j++) {
            need.add(t[i - 1][j + 2])
        }
    }
}

let ans: number = 0
need.forEach((key) => {
        ans += t[+key - 1][0]
    }
)


console.log(ans)

// function getTime(tka: number[]): number {
//
//     const t1: number = tka[0]
//     const k1: number = tka[1]
//
//     let time: number = t1
//     if (k1 === 0) return time
//
//     for (let i = 0; i < k1; i++) {
//         if (!set.has(tka[i + 2])) {
//             set.add(tka[i + 2]);
//             time += getTime(t[tka[i + 2] - 1])
//         }
//     }
//
//     return time
// }







