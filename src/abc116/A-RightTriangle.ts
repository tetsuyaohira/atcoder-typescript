import * as fs from 'fs';

namespace AtCoder.abc116 {

    export class Program {
        /**
         * in
         *
         * out
         *
         */
        static main(inp: string): void {
            const inpList: number[] = inp.split(' ').map(x => parseInt(x, 10)).sort((a, b) => {
                return a - b
            });
            console.log(inpList[0] * inpList[1] / 2);
        }
    }
}

AtCoder.abc116.Program.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
