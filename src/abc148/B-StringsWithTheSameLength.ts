import * as fs from 'fs';

//in
// 2
// ip cc
//out
// icpc
function main(inp: string) {
    const n: number = parseInt(inp.split('\n')[0]);
    const [s, t]: string[] = inp.split('\n')[1].split(' ').map(String);

    let ans :string='';
    for (let i: number = 0; i < n; i++) {
        ans += s[i]+t[i];
    }
    console.log(ans);
}

main(fs.readFileSync('/dev/stdin', 'utf8').trim());