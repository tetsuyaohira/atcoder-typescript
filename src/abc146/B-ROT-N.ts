import * as fs from 'fs';

//in
// 2
// ABCXYZ
//out
// CDEZAB
const main = (inp: string) => {
    const n: number = parseInt(inp.split('\n')[0]);
    let ans: string[] = inp.split('\n')[1].split('');

    // 65 - 90
    for (let i: number = 0; i < ans.length; i++) {
        let code: number = ans[i].charCodeAt(0) + n;
        if (code > 90) {
            code = 65 + (code - 91);
        }
        ans[i] = String.fromCharCode(code);
    }
    console.log(ans.join(''));
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
