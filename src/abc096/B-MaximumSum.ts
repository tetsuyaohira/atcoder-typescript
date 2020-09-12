import * as fs from 'fs';

namespace AtCoder.abc096 {
    export class Program {
        constructor(private readonly args: string[][]) {
        }

        main(this: Program) {
            const abc: number[] = this.args[0].map(Number);
            const [k]: number[] = this.args[1].map(Number);
            const max: number = Math.max(...abc);
            const shifted: number = (max << k) - max;
            const ans: number = abc.reduce((acc: number, cur: number) => acc + cur) + shifted;

            console.log(ans);
        }
    }
}

const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(x => x.split(' '));
const prg: AtCoder.abc096.Program = new AtCoder.abc096.Program(args);
prg.main();