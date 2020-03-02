import * as fs from 'fs';

//in
//
//out
//
const main = (inp:string) => {
    const a:number = parseInt(inp.split('\n')[0]);
    const s:string = inp.split('\n')[1];

    if (a >= 3200) {
        console.log(s);
    } else {
        console.log('red');
    }

};

main(fs.readFileSync('/dev/stdin','utf8').trim());