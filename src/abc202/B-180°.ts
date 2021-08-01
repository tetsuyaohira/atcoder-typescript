import {readFileSync} from "fs";

const s: string = readFileSync('/dev/stdin', 'utf8').trim();

// 0 を 0 に、1 を 1 に、6 を 9 に、8 を 8 に、9 を 6 に変換

const ans :string = s.split('').map((word) => {
    if (word === '6') return '9';
    if (word === '9') return '6';
    return word;
}).reverse().join('');

console.log(ans);
