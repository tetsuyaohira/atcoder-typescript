import * as fs from 'fs';

namespace AtCoder.abc118 {

    export class Program {
        /**
         * in
         * 4 12
         * out
         * 16
         */
        static main(inp: string):
            void {
            const [a, b]: number[] = inp.split(' ').map(Number);

            if (b % a === 0) {
                console.log(a + b);
            } else {
                console.log(b - a);
            }
        }
    }
}

AtCoder.abc118.Program.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
