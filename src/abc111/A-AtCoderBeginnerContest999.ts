import * as fs from 'fs';

namespace AtCoder.abc111 {

    class Program {
        /**
         * ins
         *  119
         * out
         *  991
         */
        main(inp: string): void {

            const x: string[] = inp.split('').map(n => {
                if (n === '1') {
                    return '9';
                } else {
                    return '1';
                }
            });
            console.log(x.join(''));
        }
    }

    const prg = new Program();
    prg.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
}