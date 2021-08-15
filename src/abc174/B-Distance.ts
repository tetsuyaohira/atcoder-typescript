import {readFileSync} from 'fs';

const args: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, d]: number[] = args[0].split(' ').map(Number);

let ans: number = 0;
for (let i: number = 0; i < n; i++) {
    const [x, y]: number[] = args[i + 1].split(' ').map(Number);
    const distance: number = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    if (distance <= d) {
        ans++;
    }
}
console.log(ans);