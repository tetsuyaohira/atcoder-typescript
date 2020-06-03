import * as fs from 'fs';

namespace AtCoder.abc091 {
    export class Program {
        constructor(private readonly args: string[]) {
        }

        main(this: Program): void {
            const [a, b, c]: number[] = this.args[0].split(' ').map(Number);

            console.log((a + b >= c) ? 'Yes' : 'No');

        }
    }
}

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg: AtCoder.abc091.Program = new AtCoder.abc091.Program(args);
prg.main();