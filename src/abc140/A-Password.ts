import * as fs from 'fs';

//in
//
//out
//
const main = (inp:string) => {
    const n :number = parseInt(inp);
    console.log(n**3);
};

main(fs.readFileSync('/dev/stdin','utf8').trim());
