import {readFileSync} from 'fs'

const input: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N: number = +input[0]
const P: number[] = input[1].split(' ').map(Number)

const Q: number[] = new Array(N).fill(0)


for (let i: number = 0; i < N; i++) {
    Q[P[i] - 1] = i + 1;
}

console.log(Q.join(' '))


