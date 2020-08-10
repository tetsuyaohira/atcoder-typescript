import * as fs from 'fs';

namespace AtCoder.abc086 {
    export class Program {
        constructor(private readonly args: string[][]) {
        }

        main(this: Program): void {
            const [s]: string[] = this.args[0];
            console.log(s.replace('2017', '2018'));
        }
    }
}

const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(x => x.split(' '));
const prg: AtCoder.abc086.Program = new AtCoder.abc086.Program(args);
prg.main();
