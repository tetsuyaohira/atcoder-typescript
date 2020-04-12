import * as fs from 'fs';

namespace AtCoder.abc093 {

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
            const s: string = this.args[0];
            const sorted: string = s.split('').sort().join('');
            if (sorted === 'abc') {
                console.log('Yes');
            } else {
                console.log('No');
            }
        }
    }
}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg = new AtCoder.abc093.Program(args);
prg.main();
