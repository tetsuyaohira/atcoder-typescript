import {readFileSync} from "fs";

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, m, t]: number[] = args[0].split(' ').map(Number);
const a: number[] = args[1].split(' ').map(Number);
const x: number[][] = args.slice(2).map(r => r.split(' ').map(Number));


console.log(main() === true ? 'Yes' : 'No');

function main() {


    const map = new Map();
    for (let j = 0; j < m; j++) {
        map.set(x[j][0], x[j][1]);
    }


    let life: number = t;
    for (let i = 0; i < n; i++) {
        const wait: number = a[i];
        if (life - wait <= 0) {
            return false;
        }
        life -= wait;

        if (map.has(i + 2)) {
            const up: number = map.get(i + 2)
            life += up;
        }
    }

    return true;
}
