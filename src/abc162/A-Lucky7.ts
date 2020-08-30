import * as fs from 'fs';

namespace AtCoder.abc162 {

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
            const ans: boolean = s.split('').some(x => {
                return (x === '7');
            });
            console.log(ans ? 'Yes' : 'No');
        }
    }
}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg = new AtCoder.abc162.Program(args);
prg.main();
