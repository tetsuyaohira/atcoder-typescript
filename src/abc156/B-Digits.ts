import * as fs from 'fs';

//in
// 11 2
//out
// 4
const main = (inp: string) => {
    const [n, k]: number[] = inp.split(' ').map(Number);
    let tmp: number = n;
    let ans: number = 0;
    while (Math.floor(tmp) > 0) {
        tmp = tmp / k;
        ans++;
    }
    console.log(ans);

}
main(fs.readFileSync('/dev/stdin', 'utf8').trim());
