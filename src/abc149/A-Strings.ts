import * as fs from 'fs';

//in
// oder atc
//out
// atcoder
function main(inp:string) {
    const [s,t] = inp.split(' ').map(String);
    console.log(t+s);
}

main(fs.readFileSync('/dev/stdin','utf8').trim());