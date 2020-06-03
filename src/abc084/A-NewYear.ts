import * as fs from 'fs';

namespace AtCoder.abc084 {

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
            const [m]: number[] = this.args[0].map(Number);
            console.log(24+(24-m));
        }
    }
}

const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
const prg: AtCoder.abc084.Program = new AtCoder.abc084.Program(args);
prg.main();
