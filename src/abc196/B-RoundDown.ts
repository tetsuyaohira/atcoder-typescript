import {readFileSync} from 'fs';

const x :string = readFileSync('/dev/stdin','utf8').trim();
console.log(x.split('.')[0]);