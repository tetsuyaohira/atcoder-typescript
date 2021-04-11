import {readFileSync} from 'fs';

const s: string = readFileSync('/dev/stdin', 'utf8').trim();


console.log(s[1]+s[2]+s[0]);