import * as fs from 'fs';

namespace AtCoder.abc106 {

    class ProgramB {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         *  105
         * out
         *  1
         */
        main(): void {
            const n: number = parseInt(this.args[0], 10);
            let ans: number = 0;
            for (let i: number = 105; i < n + 1; i = i + 2) {
                let cnt: number = 0;
                for (let j: number = 1; j < i + 1; j++) {
                    if (i % j === 0) cnt++;
                }
                if (cnt === 8) {
                    ans++;
                }
            }
            console.log(ans);
        }
    }

    const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const prg = new ProgramB(args);
    prg.main();
}


