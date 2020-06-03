import * as fs from 'fs';

namespace AtCoder.abc098 {

    export class Program {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         * 3 1
         * out
         * 4
         */
        main(): void {
            const [a, b]: number[] = this.args[0].split(' ').map(Number);
            console.log(~~Math.max(...[a + b, a - b, a * b]));
        }
    }

}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg = new AtCoder.abc098.Program(args);
prg.main();
