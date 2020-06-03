import * as fs from 'fs';

namespace AtCoder.abc090 {

    export class Program {

        constructor(private readonly args: string[]) {
        }

        /**
         * in
         * ant
         * obe
         * rec
         * out
         * abc
         */
        main(this: Program): void {

            const c123: string[] = this.args[0].split('');
            const c456: string[] = this.args[1].split('');
            const c789: string[] = this.args[2].split('');

            console.log(`${c123[0]}${c456[1]}${c789[2]}`);
        }
    }
}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg: AtCoder.abc090.Program = new AtCoder.abc090.Program(args);
prg.main();
