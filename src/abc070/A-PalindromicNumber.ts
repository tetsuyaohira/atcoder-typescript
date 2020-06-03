import * as fs from 'fs';
const args : string = fs.readFileSync('/dev/stdin','utf8').trim();
if (args[0] === args[2]) {
    console.log('Yes');
} else {
    console.log('No');
}
