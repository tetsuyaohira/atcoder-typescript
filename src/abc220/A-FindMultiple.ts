import {readFileSync} from "fs";

const [a, b, c]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

// 123 456 100
// 200
main(a, b, c).then();

async function main(a: number, b: number, c: number) {

    // const [q, w, e]: number[] = await getArgs();

    for (let i = c; i <= b; i = i + c) {
        if (i >= a && i <= b) {
            console.log(i);
            return;
        }
    }

    console.log(-1);
}

// async function getArgs() {
//     return readFileSync(readFileSync('/dev/stdin', 'utf8').trim());
// }