import * as fs from 'fs';

namespace AtCoder.abc103 {
    class ProgramA {
        args: string[];

        constructor(inp: string[]) {
            this.args = inp;
        }

        main(): void {
            const a: number[] = this.args[0].split(' ').map(Number).sort((a, b) => a - b);

            let ans: number = 0;
            a.reduce((prev: number, curr: number, idx: number) => {
                if (idx === 0) return curr;
                ans += Math.abs(curr - prev);
                return curr;
            }, 0)
            console.log(ans);
        }
    }

    const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const func = new ProgramA(args);
    func.main();
}