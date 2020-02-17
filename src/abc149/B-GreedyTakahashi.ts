import * as fs from 'fs';

//in
// 2 3 3
//out
// 0 2

function main(inp: string) {
    let [a, b, k]: number[] = inp.split(' ').map(Number)
    if (k >= a) {
        k = k - a;
        a = 0;
    } else {
        a = a - k;
        k = 0;
    }

    if (k > 0) {
        if (k >= b) {
            b = 0;
        } else {
            b = b - k;
        }
    }

    // Too　late
    // for (let i = 0; i < k; i++) {
    //     if (a > 0) {
    //         a--;
    //         continue
    //     }
    //     if (b > 0) {
    //         b--
    //     }
    // }
    console.log(`${a} ${b}`);
}

main(fs.readFileSync('/dev/stdin', 'utf8').trim());