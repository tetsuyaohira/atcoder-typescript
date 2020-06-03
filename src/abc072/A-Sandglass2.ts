import * as fs from 'fs';

namespace AtCoder.abc072 {

    const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const [x, t]: number[] = args[0].split(' ').map(Number);

    if (x >= t) {
        console.log(x - t);
    } else {
        console.log(0);
    }
}