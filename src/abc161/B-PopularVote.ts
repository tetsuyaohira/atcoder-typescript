import * as fs from 'fs';

namespace AtCoder.abc001 {

    export class Program {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         * 4 1
         * 5 4 2 1
         * out
         * Yes
         *
         * 4 1
         * 5 4 2 1
         * No
         */
        main(): void {
            const [n, m]: number[] = this.args[0].split(' ').map(Number);
            const a: number[] = this.args[1].split(' ').map(Number);
            const sum: number = a.reduce((prev: number, curr: number) => {
                return prev + curr;
            });
            // console.log(sum);

            const sorted: number[] = a.sort((a: number, b: number) => b - a);
            // console.log(sorted)
            // console.log(1 / (4 * m));
            for (let i = 0; i < m; i++) {
                // console.log(sorted[i]);
                if (sorted[i] / sum < 1 / (4 * m)) {
                    console.log('No');
                    return;
                }
            }
            console.log('Yes');
        }
    }
}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg = new AtCoder.abc001.Program(args);
prg.main();


