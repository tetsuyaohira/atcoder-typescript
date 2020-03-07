import * as fs from 'fs';

namespace AtCoder.abc117 {

    export class Program {
        /**
         * in
         *
         * out
         *
         */
        static main(inp: string): void {
            const [x, y] = inp.split(' ').map(Number)
            console.log(x/y);
        }
    }
}

AtCoder.abc117.Program.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
