import * as fs from 'fs';

namespace AtCoder.abc001 {

    class Program {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        /**
         * in
         *
         * out
         *
         */
        main(): void {
            const [n, m]: number[] = this.args[0].split(' ').map(Number);

            let ans1: number = 0;
            if (n <= 1) {
                ans1 = 0;
            } else if (n === 2) {
                ans1 = 1;
            } else {
                ans1 = this.factorial(n) / (this.factorial(2) * this.factorial((n - 2)));
            }

            let ans2: number = 0;
            if (m <= 1) {
                ans2 = 0;
            } else if (m === 2) {
                ans2 = 1;
            } else {
                ans2 = this.factorial(m) / (this.factorial(2) * this.factorial((m - 2)));
            }

            console.log(ans1+ans2);

        }

        factorial(num: number): number {


            if (num <= 1) {
                return 1;
            } else {
                return num * this.factorial(num - 1);
            }
        }
    }

    const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const prg = new Program(args);
    prg.main();
}

