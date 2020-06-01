import * as fs from 'fs';

namespace AtCoder.abc001 {

    class Program {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         2 10 20
         * out
         30
         50
         90
         170
         330
         650
         1290
         2570
         5130
         10250
         */
        main(): void {
            const [r, d, x]: number[] = this.args[0].split(' ').map(Number);
            // x[i+1] = rx[i] -d

            let wkX: number = x;
            for (let i: number = 0; i < 10; i++) {
                console.log((r * wkX) - d);
                wkX = (r * wkX) - d;
            }
        }
    }

    const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const prg = new Program(args);
    prg.main();
}

