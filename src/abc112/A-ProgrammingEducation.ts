import * as fs from 'fs';

namespace AtCoder.abc112 {

    class Program {
        /**
         * in
         *
         * out
         *
         */
        main(inp: string): void {
            const [n, a, b]: number[] = inp.split('\n').map(Number);
            if (n === 1) {
                console.log('Hello World');
            } else if (n === 2) {
                console.log(a + b);
            }
        }
    }

    const prg = new Program();
    prg.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
}