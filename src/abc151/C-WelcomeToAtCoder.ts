import * as fs from 'fs';

//in
// 2 5
// 1 WA
// 1 AC
// 2 WA
// 2 AC
// 2 WA
//out
// 2 2
// 一回もACならなかった問いのWAは0

const inp: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, m] = inp[0].split(' ').map(Number);
inp.shift(); // 不要な引数を除く

const acList: any = {};
const waList: any = {};
let acTotal: number = 0;
let waTotal: number = 0;
for (let i: number = 0; i < m; i++) {

    const q: number = parseInt(inp[i].split(' ')[0]);
    if (q > n) continue;

    const status: string = inp[i].split(' ')[1];
    if (status === 'AC') {
        if (!acList[q]) {
            acList[q] = 1;
            acTotal++;

            // waCnt
            if (waList[q]) waTotal += waList[q];
        }
    } else if (status === 'WA') {
        if (acList[q]) continue;
        (!waList[q]) ? waList[q] = 1 : waList[q]++;
    }
}

//
console.log(`${acTotal} ${waTotal}`);
