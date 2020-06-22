import * as fs from 'fs';

const d: string = fs.readFileSync('/dev/stdin', 'utf8').trim();
if (d >= 'A' && d <= 'Z') console.log('A');
if (d >= 'a' && d <= 'z') console.log('a');
