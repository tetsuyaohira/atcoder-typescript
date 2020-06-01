import * as fs from 'fs';

namespace AtCoder.abc111 {
    class ProgramA {
        /**
         * in
         *  112
         * out
         *  222
         */
        main(inp: string): void {
            const n: number = parseInt(inp, 10);
            for (let i: number = 0; i < 1000; i++) {
                if ((n + i) % 111 === 0) {
                    console.log(n + i);
                    break;
                }
            }
        }
    }

    const func = new ProgramA();
    func.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
}
