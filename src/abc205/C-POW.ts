import {readFileSync} from "fs";

const [a, b, c]: number[] = readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

const isEven: boolean = (c % 2 === 0);

if (!isEven) {
    if (a > b) console.log('>');
    if (a < b) console.log('<');
    if (a === b) console.log('=');
} else {
    if (Math.abs(a) > Math.abs(b)) console.log('>');
    if (Math.abs(a) < Math.abs(b)) console.log('<');
    if (Math.abs(a) === Math.abs(b)) console.log('=');
}