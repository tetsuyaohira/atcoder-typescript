import * as fs  from 'fs';

//in
// A
//out
// T

//in
// G
//out
// C

const main = (inp: string) => {
    const tables :{[s:string]:string}= {
        'A': 'T',
        'T': 'A',
        'G': 'C',
        'C': 'G'
    };

    console.log(tables[inp]);
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
