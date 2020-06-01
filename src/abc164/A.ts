import * as fs from 'fs';

namespace AtCoder.abc001 {

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
            const [s,w]:number[] = this.args[0].map(Number);

            if (w>=s){
                console.log('unsafe');
            } else {
                console.log('safe');
            }
        }
    }
}

const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
const prg: AtCoder.abc001.Program = new AtCoder.abc001.Program(args);
prg.main();
