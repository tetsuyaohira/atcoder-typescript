import * as fs from 'fs';

namespace AtCoder.abc001 {

    export class Program {

        constructor(private readonly args: string[]) {
        }

        /**
         * in
         *
         * out
         *
         */
        main(this: Program): void {
            const n: string = this.args[0];
            let ans: number = 0;
            let nn: string[] = n.split('');
            while (nn.length > 3) {
                let target: string = '';
                nn.forEach(x => {
                        target += x;
                        if (target.length >= 4) {
                            if (parseInt(target, 10) % 2019 === 0) {
                                ans++;
                            }
                        }
                    }
                );
                nn.shift();
            }

            // for (let i = 0; i < n.length; i++) {
            //     for (let j = i + 4; j < n.length; j++) {
            //         let target: string = n[i];
            //         for (let z = i + 1; z <= j; z++) {
            //             target += n[z];
            //         }
            //         if (parseInt(target, 10) % 2019 === 0) {
            //             ans++;
            //         }
            //     }
            // }
            console.log(ans);
        }
    }
}

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg: AtCoder.abc001.Program = new AtCoder.abc001.Program(args);
prg.main();
