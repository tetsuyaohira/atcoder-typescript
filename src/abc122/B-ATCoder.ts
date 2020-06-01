import * as fs from 'fs';

namespace AtCoder.abc122 {
    class ProgramB {
        args: string[];

        // ATCODER
        // 3
        constructor(args: string[]) {

            this.args = args;
        }

        main(): void {
            // ACGT
            const s: string = this.args[0];
            const target: string[] = ['A', 'C', 'G', 'T'];
            let ans: number = 0;
            let wk: number = 0;
            s.split('').forEach((val: string) => {
                if (target.some(x => x === val)) {
                    wk++;
                } else {
                    wk = 0;
                }
                if (wk >= ans) {
                    ans = wk;
                }
            });

            console.log(ans);
        }
    }

    const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    new ProgramB(args).main();
}