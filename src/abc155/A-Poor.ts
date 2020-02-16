import * as fs from 'fs'


//in
// 5 7 5
//out
// Yes

let input: string[] = fs.readFileSync('/dev/stdin', 'utf8').split(' ');
input = input.sort();

const a = +input[0];
const b = +input[1];
const c = +input[2];


// 4 4 9

if (a == b && b !=c) {
    console.log('Yes');
} else if(b == c && a!=b) {
    console.log('Yes');
} else {
    console.log('No');
}