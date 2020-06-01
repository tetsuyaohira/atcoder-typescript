import * as fs from 'fs';

namespace AtCoder.abc119 {

    /**
     * Program
     */
    export class Program {
        /**
         * in
         *  2019/04/30
         * out
         *  Heisei
         */
        static main(inp: string): string {
            if (inp <= '2019/04/30') {
                return 'Heisei';
            } else {
                return 'TBD';
            }
        };
    }
}

console.log(AtCoder.abc119.Program.main(fs.readFileSync('/dev/stdin', 'utf8').trim()));
