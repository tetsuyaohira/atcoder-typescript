import * as fs from 'fs';

namespace AtCoder.abc159 {

    class ProgramB {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         * akasaka
         * out
         * Yes
         */
        main(): void {

            const len: number = this.args[0].length;
            const s: string = this.args[0];

            const targer1: string = s.slice(0, (len - 1) / 2);
            const targer2: string = s.slice(((len + 3) / 2) - 1);

            if (targer1 === targer2) {
                console.log('Yes');
            } else {
                console.log('No');
            }
        }
    }

    const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const prg = new ProgramB(args);
    prg.main();
}


