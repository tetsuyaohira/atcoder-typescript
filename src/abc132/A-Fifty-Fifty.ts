import * as fs from 'fs';

//in
// SASA
//out
// Yes
const main: any = (inp: string) => {
    const s :string[] = inp.split('');
    const tbl: { [s:string]: number } = {};
    for (let wl  of s) {
        tbl[wl] = 0;
    }
    for (let wl of s ) {
        tbl[wl]++;
    }
    let ans :string = 'Yes';
    for (let wl of s ) {
        if (tbl[wl] !==2) {
            ans = 'No';
        }
    }
    console.log(ans);
};
main(fs.readFileSync('/dev/stdin', 'utf8').trim());
