import * as fs from 'fs';

namespace AtCoder.abc110 {

    class Program {
        /**
         * in
         *  1 5 2
         * out
         *  53
         */
        main(inp: string): void {
            const abc: number[] = inp.split(' ').map(Number);
            const abcSorted: number[] = abc.sort((a, b) => b - a);

            const x: string = abcSorted.slice(0, 2).join('');
            const y: string = abcSorted.slice(2).join('');

            console.log(parseInt(x) + parseInt(y));
        }
    }

    const prg = new Program();
    prg.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
}
