import * as fs from 'fs';

namespace AtCoder.abc162 {

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
            const n: string = this.args[0];

            let flg = false;
            n.split('').some((x) => {
                if (x === '7') flg = true;
            });

            console.log(flg ? 'Yes' : 'No');

        }
    }
}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg: AtCoder.abc162.Program = new AtCoder.abc162.Program(args);
prg.main();
