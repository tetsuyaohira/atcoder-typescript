import * as fs from 'fs';

namespace AtCoder.abc101 {
    class ProgramA {
        args: string[];

        // +-++
        // 2
        constructor(args: string[]) {
            this.args = args;
        }

        main(): void {
            const s: string = args[0];
            let ans: number = 0;

            s.split('').forEach(x => {
                if (x === '+') ans++;
                if (x === '-') ans--;
            });
            console.log(ans);
        }
    }

    const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const func: ProgramA = new ProgramA(args);
    func.main();
}