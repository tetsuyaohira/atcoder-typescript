import * as fs from 'fs';

namespace AtCoder.abc096 {
    class ProgramA {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        main(): void {
            const [a, b] = this.args[0].split(' ').map(Number);

            if (a <= b) {
                console.log(a);
            } else {
                console.log(a - 1);
            }
        }
    }

    const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    new ProgramA(args).main();

}