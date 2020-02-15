import * as fs from "fs";

// 4 3
// 3333
const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split(" ");

const a: number = parseInt(input[0]);
const b: number = parseInt(input[1]);

let result: string = '';
if (a == b) {
    for (let i: number = 0; i < a; i++) {
        result += a.toString();
    }
} else if (a > b) {
    for (let i: number = 0; i < a; i++) {
        result += b.toString()
    }
} else {
    for (let i: number = 0; i < b; i++) {
        result += a.toString()
    }
}
console.log(result);

