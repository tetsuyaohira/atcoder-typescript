import * as fs from 'fs';

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, s, d]: number[] = args[0].split(' ').map(Number);


let func = function () {
    for (let i = 1; i < n+1; i++) {
        const [x, y]: number[] = args[i].split(' ').map(Number);
        if (x < s && y > d) {
            console.log('Yes');
            return;
        }
    }
    console.log('No');
}

func();
