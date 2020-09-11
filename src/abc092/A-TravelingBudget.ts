import * as fs from 'fs';

namespace AtCoder.abc092 {

    export class Program {

        constructor(private readonly args: string) {
        }

        /**
         * in
         *
         * out
         *
         */
        main(this: Program): void {
            const [a, b, c, d]: number[] = this.args.split('\n').map(Number);

            console.log(Math.min(a, b) + Math.min(c, d));
        }
    }
}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim();
const prg = new AtCoder.abc092.Program(args);
prg.main();
