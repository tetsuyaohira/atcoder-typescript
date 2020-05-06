import * as fs from 'fs';

namespace AtCoder.abc001 {

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
        main(): void {
            const [x, y, z]: number[] = this.args[0].split(' ').map(Number);

            //a b
            //a c
            console.log(`${z.toString()} ${x.toString()} ${y.toString()}`);

        }
    }

}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg = new AtCoder.abc001.Program(args);
prg.main();


