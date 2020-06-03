import * as fs from 'fs'

//in
// 4
//out
// 48
// 3a2
const main = (inp: string) => {

    const r :number = parseInt(inp);

    console.log(3*r**2);
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
