import {readFileSync} from "fs";

const [x, y, n]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);


if (x * 3 > y) {

    // 3
    const yy: number = Math.floor(n / 3);

    const xx: number = n - (yy * 3);

    console.log(xx * x + yy * y);

} else {
    console.log(x * n);
}