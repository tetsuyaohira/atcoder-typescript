import * as fs from 'fs'

//in
// 5
// 4 2 5 1 3
//out
// 3
const input: string[] = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
const n: number = parseInt(input[0]);
const p: number[] = input[1].split(' ').map(Number);
let result: number = 0;
let min :number = Infinity;
for (let i: number = 0; i < n; i++) {

    if (min > p[i]) {
        result++;
        min = p[i];
    }
}

console.log(result);
