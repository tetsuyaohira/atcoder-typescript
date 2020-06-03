import * as fs from 'fs';

namespace AtCoder.abc160 {

    export class ProgramC {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         *  20 3
         *  5 10 15
         * out
         *  10
         *
         *
         *  20 3
         *  0 5 15
         *
         *  10
         */
        main(): void {
            const [k, n]: number[] = this.args[0].split(' ').map(Number);
            let a: number[] = this.args[1].split(' ').map(Number);

            for (let i = 0; i < n; i++) {
                a.push(k + a[i]);
            }
            let ans: number = Infinity;
            for (let i = 0; i < n; i++) {
                let wk: number = 0;
                wk = a[i+n-1]-a[i];
                // for (let j = 0; j < n - 1; j++) {
                //     wk += a[j + i + 1] - a[j + i];
                //     if (ans < wk) break;
                // }
                if (ans > wk) ans = wk;
            }
            console.log(ans);
        }
    }

}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg = new AtCoder.abc160.ProgramC(args);
prg.main();


