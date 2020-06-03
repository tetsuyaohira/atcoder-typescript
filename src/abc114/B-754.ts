import * as fs from 'fs';

namespace AtCoder.abc114 {

    class Program {

        /**
         * in
         *  1234567876
         * out
         *  34
         */
        main(inp: string): void {

            let ans: number = 99999;

            let wk: string = '';
            inp.split('').forEach(x => {
                wk += x;

                if (wk.length === 4) {
                    wk = wk[1] + wk[2] + wk[3];
                }

                if (wk.length === 3) {
                    let abs: number = Math.abs(753 - parseInt(wk));
                    if (ans > abs) {
                        ans = abs;
                    }
                }
            });

            console.log(ans);

        }
    }

    const func = new Program();
    func.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
}
