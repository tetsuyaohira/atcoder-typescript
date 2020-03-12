import * as fs from 'fs';

namespace AtCoder.abc113 {

    class Program {
        /**
         * in
         *  81 58
         * out
         *  110
         */
        main(inp: string): void {
            const [x, y]: number[] = inp.split(' ').map(x => parseInt(x, 10));
            console.log(x+y/2);

        }
    }

    const prg = new Program();
    prg.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
}


