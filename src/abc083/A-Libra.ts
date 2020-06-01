import * as fs from 'fs';

namespace AtCoder.abc083 {
    export class Program {
        constructor(private readonly args: string[][]) {

        }

        main(this: Program) {
            const [a, b, c, d]: number[] = this.args[0].map(Number);

            if (a + b > c + d) console.log('Left');
            if (a + b < c + d) console.log('Right');
            if (a + b === c + d) console.log('Balanced');

        }
    }
}

const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
const prg: AtCoder.abc083.Program = new AtCoder.abc083.Program(args);
prg.main();
