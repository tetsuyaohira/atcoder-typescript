import {readFileSync} from "fs";

const args: string[] = readFileSync('/dev/stdin', 'utf8')
    .trim().split('\n');

const [n, m]: number[] = args[0].split(' ').map(Number);

let wk = [];
for (let i = 0; i < n * 2; i++) {
    const gcp = args[i + 1];
    const lost = 0;
    const name = i + 1;
    wk.push({gcp, lost, name})
}


for (let i: number = 0; i < m; i++) {
    console.log(`---i:${i}----------------`);

    for (let j: number = 0; j < n; j++) {
        console.log(`---j:${j}----------------`);

        const gcp1 = wk[j * 2].gcp.split('')[i];
        const lost1 = wk[j * 2].lost;
        const name1 = wk[j * 2].name;

        const gcp2 = wk[j * 2 + 1].gcp.split('')[i];
        const lost2 = wk[j * 2 + 1].lost;
        const name2 = wk[j * 2 + 1].name;

        console.log(gcp1, lost1, name1);
        console.log(gcp2, lost2, name2);

        if (gcp1 === 'G' && gcp2 === 'C') {
            wk[j * 2 + 1].lost++;
        }
        if (gcp1 === 'C' && gcp2 === 'P') {
            wk[j * 2 + 1].lost++;
        }
        if (gcp1 === 'P' && gcp2 === 'G') {
            wk[j + 1].lost++;
        }

        if (gcp2 === 'G' && gcp1 === 'C') {
            wk[j + 1].lost++;
        }
        if (gcp2 === 'C' && gcp1 === 'P') {
            wk[j + 1].lost++;
        }
        if (gcp2 === 'P' && gcp1 === 'G') {
            wk[j * 2 + 1].lost++;
        }

        wk = wk.sort((rec1, rec2) => {
            // const n4 = '0'.repeat(3 - rec1.length) + rec;
            return rec1.lost - rec2.lost;
        });

    }
}

console.log(wk)