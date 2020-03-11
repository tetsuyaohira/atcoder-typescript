import * as fs from 'fs';

//in
//
//out
//
const main = (inp: string) => {

    if (parseInt(inp) % 2 ===0) {
        console.log(parseInt(inp) / 2);
    } else {
        console.log(Math.floor(parseInt(inp) / 2)+1);
    }
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
