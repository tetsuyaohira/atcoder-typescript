import * as fs from 'fs';

//in
// 3 1
//out
// ABC
const main = (inp: string) => {
    const [n, k]: number[] = inp.split('\n')[0].split(' ').map(Number);
    const s: string[] = inp.split('\n')[1].split('');
    for (let i: number = 0; i < n; i++) {
        if (i === k-1) {
            s[i] = s[i].toLowerCase();
        }
    }
    console.log(s.join(''));
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());

