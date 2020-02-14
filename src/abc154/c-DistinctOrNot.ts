import * as fs from 'fs'

function main(n: number, xn: number[]) {
    xn = xn.sort();

    for (let i: number = 0; i < xn.length-1; i++) {
        if (xn[i] === xn[i+1]) {
            console.log('NO');
            return;
        }
    }
    console.log('YES');
}

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const args1: number = parseInt(input[0]);
const args2: number[] = input[1].split(' ').map(n => parseInt(n));
main(args1, args2);
