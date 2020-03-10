import * as fs from 'fs';

//in
// 3778
//out
// Bad
const main = (inp: string) => {

    if (inp[0] === inp[1] || inp[1] === inp[2] || inp[2] === inp[3]) {
        console.log('Bad');

    } else {
        console.log('Good');
    }
};
main(fs.readFileSync('/dev/stdin', 'utf8').trim());

