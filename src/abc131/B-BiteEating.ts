import * as fs from 'fs';

namespace AtCoder.abc131 {
    class ProgramB {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        main(this: ProgramB) {
            const [n, l]: number[] = this.args[0].split(' ').map(Number);

            let sum: number = 0;
            let moreSmall: number = Infinity;
            for (let i = 1; i <= n; i++) {
                sum += l + i - 1;
                if (Math.abs(moreSmall) > Math.abs(l + i - 1)) {
                    moreSmall = l + i - 1;
                }
            }

            if (sum >= 0 && moreSmall >= 0 || sum < 0 && moreSmall < 0) {
                console.log(sum - moreSmall);
            } else {
                console.log(sum + moreSmall);
            }
        }
    }

    new ProgramB(fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')).main();
}
