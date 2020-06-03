import * as fs from 'fs';

namespace AtCoder.abc160 {

    export class ProgramA {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         * Coffee
         * sippuu
         * out
         * yes
         */
        main(): void {
            const s = this.args[0];


            if (s[2]===s[3] && s[4]===s[5])
            {
                console.log('Yes');
            } else {
                console.log('No');
            }
        }
    }

}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg = new AtCoder.abc160.ProgramA(args);
prg.main();


