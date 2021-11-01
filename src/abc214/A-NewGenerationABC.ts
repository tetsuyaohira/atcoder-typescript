import {readFileSync} from 'fs';

const n: number = parseInt(readFileSync('/dev/stdin', 'utf8').trim(), 10);

if (n >= 0 && n <= 125) {
    console.log(4);
} else if (n >= 126 && n <= 211) {
    console.log(6);
} else {
    console.log(8);
}
