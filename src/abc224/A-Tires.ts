import {readFileSync} from "fs";

const s: string = readFileSync('/dev/stdin', 'utf8').trim();

if (s.slice(s.length - 2) === 'er') {
    console.log('er');
} else if (s.slice(s.length - 3) === 'ist') {
    console.log('ist');
}
