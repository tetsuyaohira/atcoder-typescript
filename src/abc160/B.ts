import * as fs from 'fs';

namespace AtCoder.abc160 {

    export class ProgramB {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         *1024
         * out
         * 2020
         */
        main(): void {
            let x: number = parseInt(this.args[0], 10);

            let ans :number=0;
            while(x>4) {
                if (x>=500) {
                    ans+=1000;
                    x-=500;
                } else if (x>=5) {
                    ans+=5;
                    x-=5;
                }
            }
            console.log(ans);
        }
    }

}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg = new AtCoder.abc160.ProgramB(args);
prg.main();


