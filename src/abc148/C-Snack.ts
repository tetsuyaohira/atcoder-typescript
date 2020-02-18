import * as fs from 'fs';

//in
// 2 3
//out
// 6
function main(inp: string) {
    const [a, b]: number[] = inp.split(' ').map(Number);
    console.log(lcm(a, b));
}

function gcd(a: number, b: number): number {
    if (b != 0)
        return gcd(b, a % b);
    else
        return a;
}

function lcm(a: number, b: number): number {
    return a * b / gcd(a, b);
}

main(fs.readFileSync('/dev/stdin', 'utf8').trim());