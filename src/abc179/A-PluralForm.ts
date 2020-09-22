import * as fs from 'fs';

const s: string = fs.readFileSync('/dev/stdin', 'utf8').trim();
console.log(s.substring(s.length-1) === 's' ? s + 'es' : s + 's');
