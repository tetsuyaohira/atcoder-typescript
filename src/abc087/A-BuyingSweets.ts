import * as fs from 'fs';

namespace AtCoder.abc087 {

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
            const [x]: number[] = this.args[0].map(Number);
            const [a]: number[] = this.args[1].map(Number);
            const [b]: number[] = this.args[2].map(Number);

            let wk: number = x - a;
            console.log(wk % b);
        }
    }
}

const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
const prg: AtCoder.abc087.Program = new AtCoder.abc087.Program(args);
prg.main();
