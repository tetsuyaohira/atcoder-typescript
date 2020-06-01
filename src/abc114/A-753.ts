import * as fs from 'fs';

namespace AtCoder.abc114 {
    export class Program {
        static main(inp: string): void {

            const x: number = parseInt(inp);
            if (x === 3 || x === 5 || x === 7) {
                console.log('YES');
            } else {
                console.log('NO');
            }
        }
    }
}

AtCoder.abc114.Program.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
