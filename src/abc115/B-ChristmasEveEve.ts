import * as fs from 'fs';

namespace AtCoder.abc115 {

    class Program {
        /**
         * in
         *  3
         *  4980
         *  7980
         *  6980
         * out
         *  15950
         */
        main(inp: string): void {

            const p = inp.split('\n');
            p.shift();

            const sorted: string[] = p.sort((a, b) => {
                return parseInt(b) - parseInt(a);
            });
            const sortedNum: number[] = sorted.map(Number);

            const ans: number = sortedNum.reduce(
                (accumulator, currentValue, idx) =>
                    idx === 0 ? (accumulator + currentValue) / 2 : accumulator + currentValue, 0);
            console.log(ans);
        }
    }

    const prg = new Program();
    prg.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
}
