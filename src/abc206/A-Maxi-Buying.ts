import {readFile, readFileSync} from 'fs';

const n: number = parseInt(readFileSync('/dev/stdin', 'utf8').trim(), 10);

const wk: number = Math.floor(n * 1.08);

if (wk < 206) console.log('Yay!');
if (wk === 206) console.log('so-so');
if (wk > 206) console.log(':(');
