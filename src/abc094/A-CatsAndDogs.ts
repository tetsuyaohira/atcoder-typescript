import * as fs from 'fs';

namespace AtCoder.abc094 {

    export class Program {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         *
         * out
         *
         */
        main(this: Program): void {
            const [a, b, x]: number[] = this.args[0].split(' ').map(Number);
            if (a > x) {
                console.log('NO')
            } else if (a + b < x) {
                console.log('NO');
            } else {
                console.log('YES');
            }
        }
    }
}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg = new AtCoder.abc094.Program(args);
prg.main();
