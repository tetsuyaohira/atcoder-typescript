import * as fs from 'fs';
//in
// 2 900
//out
// Yes
function main(inp: string) {
    const [k, x] = inp.split(' ').map(Number);
    if (k*500>=x) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
