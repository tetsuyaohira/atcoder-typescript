import * as fs from 'fs';

namespace AtCoder.abc159 {

    class ProgramD {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         * 5
         * 1 1 2 1 2
         * out
         * 2
         * 2
         * 3
         * 2
         * 3
         */
        main(): void {

            const n: number = parseInt(this.args[0], 10);
            const a: number[] = this.args[1].split(' ').map(Number);

            for (let i = 0; i < n; i++) {

                let cnt: number = 0;
                for (let i2: number = 0; i2 < n ; i2++) {
                    if (i === i2) continue;
                    for (let j2: number = i2; j2 < n ; j2++) {
                        if (i === j2) continue;
                        if (j2 === i2) continue;
                        if (a[i2] === a[j2]) {
                            cnt++;
                        }
                    }
                }

                console.log(cnt);
            }
        }
    }

    const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const prg = new ProgramD(args);
    prg.main();
}


