import * as fs from 'fs';

//in
// 5 3
//out
// 9
const main = (inp: string) => {
    let buttons: number[] = inp.split(' ').map(Number);
    let ans: number = 0;
    for (let i: number = 0; i < 2; i++) {
        buttons = buttons.sort((a, b) => {
            return b - a
        });
        ans += buttons[0];
        buttons[0]--;
    }
    console.log(ans);
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
