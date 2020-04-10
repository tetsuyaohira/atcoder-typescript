import * as fs from 'fs';

namespace AtCoder.jsutc202004 {

    export class Program {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         * 5 1 5
         * out
         * 5
         */
        main(): void {
            const [s, l, r]: number[] = this.args[0].split(' ').map(Number);
            if (s >= l && s <= r) console.log(s);
            if (s < l) console.log(l);
            if (s > r) console.log(r);
        }
    }

}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg = new AtCoder.jsutc202004.Program(args);
prg.main();
