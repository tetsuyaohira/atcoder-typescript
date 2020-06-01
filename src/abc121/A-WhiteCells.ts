import * as fs from 'fs';

//in
//
//out
//
const main = (inp: string) => {

    const h: number = parseInt(inp.split('\n')[0].split(' ')[0]);
    const w: number = parseInt(inp.split('\n')[0].split(' ')[1]);
    const hh: number = parseInt(inp.split('\n')[1].split(' ')[0]);
    const ww: number = parseInt(inp.split('\n')[1].split(' ')[1]);
    console.log((h - hh) * (w - ww));
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
