import * as fs from 'fs';

namespace AtCoder.abc105 {

    class ProgramA {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         *  7 3
         * out
         *  1
         */
        main(): void {
            const [n, k]: number[] = this.args[0].split(' ').map(x => +x);
            (n % k === 0) ? console.log(0) : console.log(1);
        }
    }

    const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const prg = new ProgramA(args);
    prg.main();
}


