import * as fs from 'fs';

let input: string[] = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
let n:number = parseInt(input[0]);
let a:number[] = input[1].split(' ').map(Number);

// 5
// 6 7 9 10 31
// APPROVED
// DENIED


for (let i:number=0;i<n;i++) {
    if (a[i] % 2 ===0) {
        // 偶数
        // 3または5で割り切れる
        if (a[i] %3 ===0 || a[i] %5 ===0){
        } else {
            console.log('DENIED');
            break;
        }
    }

    if (i===n-1) {
        console.log('APPROVED');
    }
}