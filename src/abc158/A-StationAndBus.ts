import * as fs from 'fs';

namespace AtCoder.abc158 {
    export class Program {
        /**
         * ABA
         * Yes
         */
        static main(inp: string) {

            if (inp === 'AAA' || inp === 'BBB') {
                console.log('No');
            } else {
                console.log('Yes');
            }

        }
    }
}

AtCoder.abc158.Program.main(fs.readFileSync('/dev/stdin','utf8').trim());