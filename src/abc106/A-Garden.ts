import * as fs from 'fs';

namespace AtCoder.abc106 {

    class ProgramA {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         * 5 7
         * out
         * 24
         */
        main(): void {
            const [a, b]: number[] = this.args[0].split(' ').map(Number);
            // 35
            // 5+7-1
            console.log(a * b - (a + b - 1));
        }
    }

    const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const prg = new ProgramA(args);
    prg.main();
}


