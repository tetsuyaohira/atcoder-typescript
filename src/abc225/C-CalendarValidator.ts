import {readFileSync} from "fs";

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, m]: number[] = args[0].split(' ').map(Number);


const b: number[][] = args.slice(1, n + 1).map(v => v.split(' ').map(Number));

const si: number = Math.floor(b[0][0] / 7);
const sj: number = b[0][0] % 7;

const func = () => {

    if (sj === 0 && m >1) {
        console.log('No');
        return;
    }

    if (sj + m -1 > 7) {
        console.log('No');
        return;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const nb: number = b[i][j];

            if (nb !== (si + i) * 7 + (sj + j)) {
                console.log('No');
                return;
            }
        }
    }
    console.log('Yes');
}
func();