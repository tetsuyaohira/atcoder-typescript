import * as fs from 'fs'

function main(args: string[]) {
    // 210 5
    // 31 41 59 26 53
    const line1: string = args[0];
    const line2: string = args[1];
    let h: number = parseInt(line1.split(' ')[0], 10);
    const n: number = parseInt(line1.split(' ')[1], 10);

    const tech: number[] = line2.split(' ').map(n => parseInt(n, 10));
    for (let i: number = 0; i < n; i++) {
        h -= tech[i];
    }

    if (h <= 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

main(fs.readFileSync('/dev/stdin', 'utf8').split('\n'));

