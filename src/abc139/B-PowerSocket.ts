import * as fs from 'fs';

namespace AtCoder.abc139 {

    export class Program {
        /**
         * in
         * 4 10
         * out
         * 3
         */
        static main(inp: string): void {

            const [a, b]: number[] = inp.split(' ').map(Number);

            if (b === 1) {
                console.log(0);
                return;
            }

            let k: number = 0;
            let tap: number = 0;
            k = a;
            tap = 1;
            while (k < b) {
                k += (a - 1);
                tap++;
            }

            console.log(tap);

        }
    }
}

AtCoder.abc139.Program.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
