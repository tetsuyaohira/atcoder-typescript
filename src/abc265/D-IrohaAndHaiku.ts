import {readFileSync} from "fs";

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [n, p, q, r]: number[] = args[0].split(' ').map(Number)
const a: number[] = args[1].split(' ').map(Number)

let p_check: boolean = false
let q_check: boolean = false
let r_check: boolean = false


let p_ret = checker(0,p);
if (p_ret !== -1) {
    let q_ret = checker(p_ret,q)
    if (q_ret !== -1) {
        let r_ret = checker(q_ret,r)
        if (r_ret !== -1) {
            console.log('Yes')
        } else {
            console.log('No')
        }
    } else{
        console.log('No')
    }
} else {
    console.log('No')
}

function checker(start:number,pqr:number) {
    let wk = 0
    for (let i = start; i < n; i++) {
        wk += a[i]
        if (wk === pqr) {
            return i
        }
        if (wk > pqr) {
            wk = 0
        }
    }
    return -1;
}

