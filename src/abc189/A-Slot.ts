import * as fs from 'fs';

const c: string = fs.readFileSync('/dev/stdin', 'utf8').trim();
if (c[0] === c[1] && c[1] === c[2]) {
    console.log('Won');
} else {
    console.log('Lost');
}
