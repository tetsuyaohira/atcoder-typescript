import {readFileSync} from 'fs';

const [n, s]: string[] = readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const index: number = s.search(/1/g);

if (index % 2 === 0) {
    console.log('Takahashi');
} else {
    console.log('Aoki');
}