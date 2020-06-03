import * as fs from 'fs';

namespace AtCoder.abc135 {

    export class Program {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         * 5
         * 5 2 3 4 1
         * out
         * Yes
         */
        main(): void {
            let p: number [] = this.args[1].split(' ').map(x => parseInt(x, 10));
            const sorted: number[] = this.args[1].split(' ').map(x => parseInt(x, 10))
                .sort((a: number, b: number) => a - b);
            let cnt: number = 0;
            for (let i = 0; i < p.length; i++) {
                if (p[i] !== sorted[i]) {
                    cnt++;
                }

                if (cnt > 2) {
                    console.log('NO');
                    return;
                }
            }
            console.log('YES');
        }
    }

}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg = new AtCoder.abc135.Program(args);
prg.main();
