//in
// 5 10 7
// 8 10 3 6
//out
// 8

// (27 + x ) / 5 = 7;
// 5 * 7 = 35
// 35 - (27) = 8
// if (10 >= 8) console.log 8
// else console.log -1
import * as fs from 'fs';
const [line1, line2]: string[] = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
const [n, k, m]: number[] = line1.split(' ').map((n): number => parseInt(n));
const an: number[] = line2.split(' ').map((n): number => parseInt(n));

const targetTotalPoint: number = n * m;
const pointSum: number = an.reduce((accumVal: number, currVal: number):number => accumVal + currVal);
const targetLastPoint: number = targetTotalPoint - pointSum;

if (targetLastPoint < 0) {
    console.log(0);
} else if (targetLastPoint <= k) {
    console.log(targetLastPoint)
} else {
    console.log(-1)
}
