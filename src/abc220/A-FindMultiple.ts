import {readFileSync} from "fs";

main();

async function main() {
    const [a, b, c] = await getArgs();
    await calc(a, b, c);
}

async function getArgs() {
    return readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
}

async function calc(a: number, b: number, c: number) {
    for (let i = c; i <= b; i = i + c) {
        if (i >= a && i <= b) {
            console.log(i);
            return;
        }
    }
    console.log(-1);
}
