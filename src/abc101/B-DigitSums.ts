import * as fs from 'fs';

namespace AtCoder.abc101 {
    class Program {
        constructor(private readonly args: string[]) {
        }

        main(this: Program): void {
            const n: number = parseInt(this.args[0], 10);
            const s: number = n.toString().split('').reduce((acc: number, cuu: string) => {
                return acc + parseInt(cuu, 10);
            }, 0);

            n % s === 0 ? console.log('Yes') : console.log('No');
        }
    }

    const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const prg = new Program(args);
    prg.main();
}