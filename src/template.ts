import * as fs from 'fs';

namespace AtCoder.abc001 {

    class Program {
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
        main(): void {
        }
    }

    const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const prg = new Program(args);
    prg.main();
}


