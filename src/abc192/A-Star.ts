import * as fs from 'fs';

let x: number = parseInt(fs.readFileSync('/dev/stdin', 'utf8').trim(), 10);

let ans: number = 0;

while (true) {
    x++;
    ans++;
    if (x % 100 === 0) {
        console.log(ans);
        break;
    }
}
