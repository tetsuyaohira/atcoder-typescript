// https://atcoder.jp/contests/abc222/tasks/abc222_c
import {readFileSync} from "fs";

const args: string[] = readFileSync('/dev/stdin', 'utf8')
    .trim().split('\n');

const [n, m]: number[] = args[0].split(' ').map(Number);

let wk = [];
for (let i = 0; i < n * 2; i++) {
    const gcp = args[i + 1];
    const lost = 0;
    const rank = 100;
    const name = i + 1;
    wk.push({gcp, lost, name, rank})
}


for (let i: number = 0; i < m; i++) {
    // console.log(`---m:${i}--------------------------------`);

    for (let j: number = 0; j < n; j++) {
        // console.log(`---n:${j}----------------`);

        const gcp1 = wk[j * 2].gcp.split('')[i];
        // const lost1 = wk[j * 2].lost;
        // const name1 = wk[j * 2].name;

        const gcp2 = wk[j * 2 + 1].gcp.split('')[i];
        // const lost2 = wk[j * 2 + 1].lost;
        // const name2 = wk[j * 2 + 1].name;

        // console.log(gcp1, lost1, name1);
        // console.log(gcp2, lost2, name2);

        if (gcp1 === 'G' && gcp2 === 'C') {
            // wk[j * 2 + 1].lost++;
            wk[j * 2].rank--;
        }
        if (gcp1 === 'C' && gcp2 === 'P') {
            // wk[j * 2 + 1].lost++;
            wk[j * 2].rank--;
        }
        if (gcp1 === 'P' && gcp2 === 'G') {
            // wk[j * 2].lost++;
            wk[j * 2 + 1].rank--;
        }

        if (gcp2 === 'G' && gcp1 === 'C') {
            // wk[j * 2 + 1].lost++;
            wk[j * 2].rank--;
        }
        if (gcp2 === 'C' && gcp1 === 'P') {
            // wk[j * 2].lost++;
            wk[j * 2 + 1].rank--;
        }
        if (gcp2 === 'P' && gcp1 === 'G') {
            // wk[j * 2].lost++;
            wk[j * 2 + 1].rank--;
        }

        // console.log(wk);

    }
    wk = wk.sort((rec1, rec2) => {
        const lost1 = ('000' + rec1.rank.toString()).slice(-3);
        const lost2 = ('000' + rec2.rank.toString()).slice(-3);
        const name1 = ('00' + rec1.name.toString()).slice(-2);
        const name2 = ('00' + rec2.name.toString()).slice(-2);

        if ((lost1 + name1) > (lost2 + name2)) {
            return 1;
        } else {
            return -1;
        }
    });

}
// console.log('===================================================');
// console.log(wk)

wk.forEach(rec => {
    console.log(rec.name);
});