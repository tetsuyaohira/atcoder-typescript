import * as fs from 'fs';

namespace AtCoder.abc162 {

    export class Program {

        constructor(private readonly args: string[]) {
        }

        /**
         * in
         *
         * out
         *
         */
        main(this: Program): void {
            const n: number = parseInt(this.args[0]);
            let ans: number = 0;

            for (let i: number = 1; i <= n; i++) {
                if (i % 3 === 0) continue;
                if (i % 5 === 0) continue;
                ans += i;
            }
            console.log(ans);
        }
    }
}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg = new AtCoder.abc162.Program(args);
prg.main();
