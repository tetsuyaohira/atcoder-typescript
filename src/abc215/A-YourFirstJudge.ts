import {readFileSync} from "fs";

const s: string = readFileSync('/dev/stdin', 'utf8').trim();

if (s === 'Hello,World!') {
    console.log('AC');
} else {
    console.log('WA');
}