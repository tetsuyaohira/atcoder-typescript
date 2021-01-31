import * as fs from 'fs';

const [a, b, c]: number[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

if (c===0) {
    if (a <= b ) {
        console.log('Aoki');
    }else {
        console.log('Takahashi');
    }
} else{
    if (a >= b) {
        console.log('Takahashi');
    } else {
        console.log('Aoki');
    }

}




