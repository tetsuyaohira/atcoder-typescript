import {readFileSync} from 'fs';

const [n, k]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

let wk = n;
for (let i = 1; i <= k; i++) {

    if (wk % 200 === 0) {
        wk = wk / 200;
    } else {
        wk  = parseInt(wk.toString() + '200');
    }
}
 console.log(wk);