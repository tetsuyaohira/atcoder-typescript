import * as fs from 'fs';

//in
//
//out
//
const main = (inp: string) => {
    const [s, t]: string[] = inp.split('\n').map(String);
    let ans: number = 0;
    for (let i: number = 0; i < 3; i++) {
        if (s[i] === t[i]) {
            ans++;
        }
    }
    console.log(ans);
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
