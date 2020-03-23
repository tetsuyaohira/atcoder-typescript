import * as fs from 'fs';

namespace AtCoder.abc104 {

    class ProgramA {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         *  1199
         * out
         * ABC
         */
        main(): void {
            const r: number = parseInt(this.args[0], 10);
            if (r < 1200) {
                console.log('ABC');
            } else if (r < 2800) {
                console.log('ARC');
            } else {
                console.log('AGC');
            }
        }
    }

    const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const prg = new ProgramA(args);
    prg.main();
}
