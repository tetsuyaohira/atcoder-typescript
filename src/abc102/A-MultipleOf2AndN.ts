import * as fs from 'fs';

namespace AtCoder.abc102 {

    class ProgramA {
        args: string[];

        // 3
        // 6
        constructor(args: string[]) {
            this.args = args;
        }

        main(): void {
            let n: number = parseInt(this.args[0], 10);
            while (n % 2 !== 0) {
                n *= 2;
            }
            console.log(n);
        }
    }

    const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const prg = new ProgramA(args);
    prg.main();
}
