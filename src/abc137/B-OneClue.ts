import * as fs from 'fs';

namespace AtCoder.abc137 {

    export class Program {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         * 3 7
         * out
         * 5 6 7 8 9
         */
        main(): void {
            const [k, x] = this.args[0].split(' ').map(Number);

            let min: number = 0;
            let max: number = 0;

            min = (x - k < -1000000) ? -1000000 : x - k;
            max = (x + k > 1000000) ? 1000000 : x + k;

            let ans: string = '';
            for (let i = min + 1; i < max; i++) {
                ans += i.toString() + ' ';
            }
            console.log(ans.trim());
        }
    }

}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg = new AtCoder.abc137.Program(args);
prg.main();


