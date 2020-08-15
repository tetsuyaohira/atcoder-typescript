import * as fs from 'fs';

namespace AtCoder.abc007 {

    class Program {
        /**
         * in
         *  4 2
         * out
         *  3
         */
        main(inp: string): void {
            const [n, i]: number[] = inp.split(' ').map(Number);
            console.log(n - i + 1);
        }
    }

    const prg = new Program();
    prg.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
}


