import * as fs from 'fs'

//in
// 7
// beat
// vet
// beet
// bed
// vet
// bet
// beet
//out
// beet
// vet

let input: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n: number = parseInt(input[0]);
input.shift();
let s: string[] = input.sort();

const counts: any = {};
let maxCnt: number = 0;
for (let i: number = 0; i < n; i++) {
    let key = s[i];
    counts[key] = (counts[key]) ? counts[key] + 1 : 1;
    if (maxCnt < counts[key]) {
        maxCnt = counts[key];
    }
}

const key:string[] = Object.keys(counts);
const result :string[]= key.filter(key => counts[key] === maxCnt);
console.log(result.join('\n'));
// ↓↓too late↓↓
// for (let key in counts) {
//     if (counts[key] === maxCnt) {
//         console.log(key);
//     }
// }