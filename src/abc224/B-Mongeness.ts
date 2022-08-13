import {readFileSync} from "fs"

const args: string[][] = readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '))
const [h, w]: number[] = args[0].map(Number)
const a: number[][] = [];

for (let i = 0; i < h; i++) {
    a[i] = args[i + 1].map(Number)
}

const Mongeness = () => {
    for (let i1 = 0; i1 < h; i1++) {
        for (let i2 = 0; i2 < h; i2++) {
            for (let j1 = 0; j1 < w; j1++) {
                for (let j2 = 0; j2 < w; j2++) {
                    if (i1 < i2 && j1 < j2) {
                        if (a[i1][j1] + a[i2][j2] > a[i2][j1] + a[i1][j2]) {
                            return 'No'
                        }
                    }
                }
            }
        }
    }
    return 'Yes'
}

const ans: string = Mongeness()
console.log(ans)


