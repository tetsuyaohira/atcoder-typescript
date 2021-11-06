import {readFileSync} from "fs";

const n: string = readFileSync('/dev/stdin', 'utf8').trim();

main(BigInt(n));

function main(input:any) {

    const N = BigInt(input);
    let k = 0;
    while (N >= BigInt(Math.pow(2, k))) {
        k++;
    }
    console.log(k - 1);
}
