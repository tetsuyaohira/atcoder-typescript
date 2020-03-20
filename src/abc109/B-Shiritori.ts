import * as fs from 'fs';

namespace AtCoder.abc109 {

    class ProgramB {
        inp: string;
        /**
         9
         basic
         c
         cpp
         php
         python
         nadesico
         ocaml
         lua
         assembly

         Yes
         */
        constructor(inp: string) {
            this.inp = inp;
        }

        main() {
            const inpArr: string[] = this.inp.split('\n');

            const n: number = parseInt(inpArr[0], 10);
            inpArr.shift();

            let flg = true;
            inpArr.reduce((prev: string, curr: string, idx: number, arr: string[]) => {
                if (prev[prev.length - 1] !== curr[0]) {
                    flg = false;
                }

                if (arr.filter((val: string) => {
                    return (val === curr);
                }).length >= 2) {
                    flg = false;
                }

                return curr;
            }, inpArr[0][0]);


            console.log(flg ? 'Yes' : 'No');
        }
    }

    const func = new ProgramB(fs.readFileSync('/dev/stdin', 'utf8').trim());
    func.main();
}
