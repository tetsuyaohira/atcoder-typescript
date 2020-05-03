import * as fs from 'fs';

namespace AtCoder.abc159 {

    class ProgramC {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         * 999
         * out
         *
         */
        main(): void {
            const l: number = parseInt(this.args[0]);

            let a: number = 0;
            let b: number = 0;
            let c: number = 0;

            a = l / 3;
            b = l / 3;
            // a = Math.ceil(l / 3);
            // b = Math.ceil(l / 3);
            c = l - (a + b);

            console.log(a*b*c);
        }
    }

    const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const prg = new ProgramC(args);
    prg.main();
}
