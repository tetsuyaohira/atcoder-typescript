import * as fs from 'fs';

namespace AtCoder.abc099 {

    export class Program {

        constructor(private readonly args: string[][]) {
        }

        /**
         * in
         *
         * out
         *
         */
        main(this: Program): void {
            const a: number = parseInt(this.args[0][0], 10);
            const b: number = parseInt(this.args[0][1], 10);

            let working: boolean = true;
            let ans: number = 0;

            while (working) {
                let sum: number = 0;
                ans++;
                for (let i: number = 1; i < a; i++) {
                    sum += i;
                    if (a + ans === sum && b + ans === sum + i + 1) {
                        working = false;
                        break;
                    }

                    if (sum>a) {
                        break;
                    }
                }
            }

            console.log(ans);
        }
    }
}

const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
const prg: AtCoder.abc099.Program = new AtCoder.abc099.Program(args);
prg.main();
