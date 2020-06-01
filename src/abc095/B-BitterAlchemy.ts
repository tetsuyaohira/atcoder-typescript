import * as fs from 'fs';

namespace AtCoder.abc095 {
    class ProgramB {
        args: string[];

        // 3 1000
        // 120
        // 100
        // 140
        //
        // 6
        constructor(args: string[]) {
            this.args = args;
        }

        main() {
            const _args = this.args;
            let [n, x]: number[] = _args[0].split(' ').map(Number);
            _args.shift();
            const m: number[] = _args.map(Number);
            m.sort((a: number, b: number) => a - b);

            let ans: number = m.reduce((acc: number, cuu: number) => {
                if (x >= cuu) {
                    acc++;
                    x -= cuu;
                }
                return acc;
            }, 0);

            while (x > 0 && x >= m[0]) {
                ans++;
                x -= m[0];
            }

            console.log(ans);
        }
    }

    const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    new ProgramB(args).main();
}