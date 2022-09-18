import {readFileSync} from 'fs'

const n: number[] = readFileSync('/dev/stdin', 'utf8').trim().split('').map(Number)

n.sort().reverse()

let a: string = n[0].toString()
let b: string = n[1].toString()

for (let i = 2; i < n.length; i++) {
    let aSum: number = +(a + n[i]) * +b;
    let bSum: number = +(b + n[i]) * +a;

    if (aSum > bSum) {
        a += n[i]
    } else {
        b += n[i]
    }

}

console.log(+a * +b)
