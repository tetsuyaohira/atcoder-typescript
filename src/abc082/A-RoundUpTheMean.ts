import * as fs from 'fs';

namespace AtCoder.abc082 {

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
            const [a, b]: number[] = this.args[0].map(Number);
            console.log(Math.ceil((a + b) / 2));
        }
    }
}

const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
const prg: AtCoder.abc082.Program = new AtCoder.abc082.Program(args);
prg.main();
