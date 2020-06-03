import * as fs from 'fs';

namespace AtCoder.abc001 {

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
            let [a, b, c, d]: number[] = this.args[0].map(Number);


            while (a > 0 || c > 0) {

                c -= b;
                if (c <= 0) {
                    console.log('Yes');
                    break;
                }

                a -= d;

                if (a <= 0) {
                    console.log('No');
                    break;
                }


            }


        }
    }
}

const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
const prg: AtCoder.abc001.Program = new AtCoder.abc001.Program(args);
prg.main();
