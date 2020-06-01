import * as fs from 'fs';

namespace AtCoder.abc105 {

    class ProgramB {
        args: string[];

        // 11
        // Yes

        // 40
        // Yes

        // 3
        // No
        constructor(args: string[]) {
            this.args = args;
        }

        main(): void {
            // 4 or 7
            let n: number = parseInt(this.args[0], 10);
            while (n > 0) {

                if (n % 4 === 0) {
                    console.log('Yes');
                    return;
                }
                if (n % 7 === 0) {
                    console.log('Yes');
                    return;
                }
                n -= 4;
            }
            console.log('No');


        }
    }

    const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    new ProgramB(args).main();
}