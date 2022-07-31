import {readFileSync} from "fs";

const x: number = +readFileSync('/dev/stdin', 'utf8').trim();

if (x === 0) {
    console.log('No');
} else if (x % 100 === 0) {
    console.log('Yes');
} else {
    console.log('No');
}