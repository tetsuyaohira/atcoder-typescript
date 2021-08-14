import {readFileSync} from "fs";

const [a, b, c, d]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

main(a, b, c, d);


function main(a: number, b: number, c: number, d: number): void {
    if (b >= c * d) {
        console.log(-1);
        return;
    }

    let blue = a;
    let red = 0;
    let cnt = 0;
    while (true) {
        cnt++;
        blue += b;
        red += c;
        if (blue <= red * d) {
            console.log(cnt);
            return;
        }
    }
}