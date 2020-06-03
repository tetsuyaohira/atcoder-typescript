import * as fs from 'fs';

namespace AtCoder.abc102 {
    class ProgramB {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        main(): void {
            const a: number[] = this.args[1].split(' ').map(Number);
            const sorted: number[] = a.sort((a: number, b: number) => a - b);

            console.log(Math.abs(sorted[sorted.length - 1] - sorted[0]));

        }
    }

    new ProgramB(fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')).main();
}　　　