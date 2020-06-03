import * as fs from 'fs';

namespace AtCoder.abc134 {
    class ProgramB {
        args: string[];

        // 6 2
        // 2
        constructor(args: string[]) {
            this.args = args;
        }

        main():void {
            const [n, d]: number[] = this.args[0].split(' ').map((x: string): number => parseInt(x, 10));
            const ans: number = (n % (d * 2 + 1) > 0) ? Math.floor(n / (d * 2 + 1) + 1) : n / (d * 2 + 1);
            console.log(ans);
        }
    }

    const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    new ProgramB(args).main();
}