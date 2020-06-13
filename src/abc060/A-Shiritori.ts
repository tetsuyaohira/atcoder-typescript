import * as fs from 'fs';

const [a, b, c]: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');

if (a.substring(a.length - 1) === (b.substring(0, 1))
    && b.substring(b.length - 1) === (c.substring(0, 1))) {
    console.log('YES');
} else{
    console.log('NO');
}