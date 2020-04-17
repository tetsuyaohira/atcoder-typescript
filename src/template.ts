import * as fs from 'fs';

namespace AtCoder.abc001 {

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
        }
    }
}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg: AtCoder.abc001.Program = new AtCoder.abc001.Program(args);
prg.main();
