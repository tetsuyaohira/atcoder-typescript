import * as fs from 'fs';

namespace AtCoder.abc097 {

    class ProgramA {
        args: string[];

        /**
         * 4 7 9 3
         * Yes
         */
        constructor(args: string[]) {
            this.args = args;
        }

        main(): void {

            const [a, b, c, d]: number[] = this.args[0].split(' ').map(Number);
            let wk1: number = Math.abs(a - c);
            if (wk1 <= d) {
                console.log('Yes');
                return;
            }
            let wk2: number = Math.abs(a - b);
            let wk3: number = Math.abs(b - c);

            if (wk2 <= d && wk3 <= d) {
                console.log('Yes');
                return;
            }
            console.log("No");


        }
    }

    new ProgramA(fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')).main();
}