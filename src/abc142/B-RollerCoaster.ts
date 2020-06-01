import * as fs from 'fs';

//in
// 4 150
// 150 140 100 200
//out
// 2
const main = (inp: string) => {
    const [n, k]: number[] = inp.split('\n')[0].split(' ').map(Number);
    const h: number[] = inp.split('\n')[1].split(' ').map(Number);
    let ans: number = 0;
    for (let i: number = 0; i < n; i++) {
        if (h[i] >= k)
            ans++;
    }
    console.log(ans);
};

main(fs.readFileSync('/dev/stdin', 'utf8').trim());
