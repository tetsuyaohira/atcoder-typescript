import * as fs from 'fs';

const main = (inp: string) => {
    // 1*1
    const r: number = parseInt(inp, 10);
    console.log(r * r);
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());