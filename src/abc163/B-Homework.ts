import * as fs from 'fs';

namespace AtCoder.abc163 {

    export class Program {

        constructor(private readonly args: string[]) {
        }

        /**
         * in
         * 41 2
         * 5 6
         * out
         *
         */
        main(this: Program): void {
            const [n, m]: number[] = this.args[0].split(' ').map(Number);
            const a: number[] = this.args[1].split(' ').map(Number);

            const sum: number = a.reduce((acc, cur) => {
                return acc + cur
            }, 0);

            if (n<sum) {
                console.log(-1);
            } else {
                console.log(n-sum);
            }

        }
    }
}

const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const prg: AtCoder.abc163.Program = new AtCoder.abc163.Program(args);
prg.main();
