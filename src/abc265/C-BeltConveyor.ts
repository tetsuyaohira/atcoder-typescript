import {readFileSync} from "fs";

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [h, w]: number[] = args[0].split(' ').map(Number);
const g: string[][] = args.slice(1).map(r => r.split('').map(c => c));

const map = new Map();
const ret = main()
if (!ret) {
    console.log('-1');
} else {
    console.log(`${ret.y + 1} ${ret.x + 1}`);

}


function main() {

    let x = 0, y = 0;
    while (true) {

        if (map.has(`${y} ${x}`)) {
            return false;
        }
        map.set(`${y} ${x}`, true);

        if (g[y][x] === 'U') {
            if (y === 0) {
                return {x, y}
            }
            y--;
        }

        if (g[y][x] === 'D') {
            if (y === h - 1) {
                return {x, y}
            }
            y++;
        }
        if (g[y][x] === 'L') {
            if (x === 0) {
                return {x, y}
            }
            x--;
        }
        if (g[y][x] === 'R') {
            if (x === w - 1) {
                return {x, y}
            }
            x++;
        }
    }


}