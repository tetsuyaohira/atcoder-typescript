import * as fs from 'fs';

namespace AtCoder.abc119 {

    export class Program {
        /**
         * in
         2
         10000 JPY
         0.10000000 BTC

         * out
         48000.0
         */
        static main(inp: string): void {
            const n: number = parseInt(inp.split('\n')[0], 10);
            let ans: number = 0;

            for (let i: number = 1; i < n + 1; i++) {
                const x: number = parseFloat(inp.split('\n')[i].split(' ')[0]);
                const y: string = inp.split('\n')[i].split(' ')[1];

                if (y === 'JPY') {
                    ans += x;
                }
                if (y === 'BTC') {
                    ans += x * 380000.0;
                }
            }

            console.log(ans);
        }
    }
}

AtCoder.abc119.Program.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
