import * as fs from 'fs';

namespace AtCoder.abc132 {

    export class ProgramB {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         * 5
         * 1 3 5 4 2
         * out
         * 2
         */
        main(this: ProgramB): void {

            const n = parseInt(this.args[0]);
            const p: number[] = this.args[1].split(' ').map(Number);
            const ans: number = p.reduce((acc: number, cur: number, idx: number) => {
                if (idx === 0) return acc;
                if (idx === n - 1) return acc;
                if (p[idx] > p[idx - 1] && p[idx] < p[idx + 1]) return acc + 1;
                if (p[idx] < p[idx - 1] && p[idx] > p[idx + 1]) return acc + 1;
                return acc;
            }, 0);

            console.log(ans);

        }
    }
}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg = new AtCoder.abc132.ProgramB(args);
prg.main();
