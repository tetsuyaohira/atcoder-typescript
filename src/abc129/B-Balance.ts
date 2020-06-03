import * as fs from 'fs';

namespace AtCoder.abc129 {

    export class ProgramB {
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
        main(this: ProgramB): void {





        }
    }
}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg = new AtCoder.abc129.ProgramB(args);
prg.main();
