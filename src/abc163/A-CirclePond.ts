import * as fs from 'fs';

namespace AtCoder.abc163 {

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
            const r :number = parseInt(this.args[0],10);
            console.log((r*2)*Math.PI);
        }
    }
}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg: AtCoder.abc163.Program = new AtCoder.abc163.Program(args);
prg.main();
