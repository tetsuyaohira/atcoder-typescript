import { readFileSync } from "fs";
import { maxHeaderSize } from "http";
import { mainModule } from "process";
import { isMainThread } from "worker_threads";

const [a, b, c, d]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

// 0 75 25 100
// 50

// 0 33 66 99
// 0

// 10 90 20 80
// 30

console.log(cal2(a, b, c, d));

function cal2(a: number, b: number, c: number, d: number): number {
    return Math.max((Math.min(b, d) - Math.max(a, c)), 0);
}

function cal(a: number, b: number, c: number, d: number): number {
    // 3
    if (b < c) return 0;

    // 4
    if (a > d) return 0;

    // 7
    if (a === c && b === d) return b - a;
    // 8
    if (a === 0 && b === 0 && c === 0 && d === 0) return 0;

    // 1 
    if (a <= c && b <= d) {
        return b - c;
    }

    // 2
    if (a >= c && b >= d) {
        return d - a;
    }

    // 5 
    if (a <= c && b >= d) {
        return d - c;
    }

    // 6 
    if (a >= c && b <= d) {
        return b - a;
    }

    return 0;
}