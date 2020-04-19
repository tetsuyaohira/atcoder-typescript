import * as fs from 'fs';

namespace AtCoder.abc163 {

    export class Program {

        constructor(private readonly args: string[]) {
        }

        /**
         * in
         5
         1 1 2 2
         * out
         2
         2
         0
         0
         0
         */
        main(this: Program): void {
            const n: number = parseInt(this.args[0], 0);
            const a: number[] = this.args[1].split(' ').map(Number);
            const ans: any = {};


            a.forEach(x => {
                if (isNaN(ans[x])) {
                    ans[x] = 0;
                }
                ans[x] = 1 + ans[x];
            });

            for (let i = 1; i <= n; i++) {

                if (!ans[i]) {
                    console.log(0);
                } else {
                    console.log(ans[i]);
                }
            }
        }
    }
}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg: AtCoder.abc163.Program = new AtCoder.abc163.Program(args);
prg.main();
