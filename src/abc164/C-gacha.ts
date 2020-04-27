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
            const n: number = +this.args[0];
            const set = new Set();
            for (let i = 1; i <= n; i++) set.add(this.args[i]);
            console.log(set.size);
        }
    }
}

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg: AtCoder.abc001.Program = new AtCoder.abc001.Program(args);
prg.main();
