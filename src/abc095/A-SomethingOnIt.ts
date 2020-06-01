import * as fs from 'fs';

namespace AtCoder.abc095 {
    class ProgramA {
        args: string[];

        // oxo
        // 900
        constructor(args: string[]) {
            this.args = args;
        }

        main(): void {
            const cnt: number = this.args[0].split('').reduce((prev: number, curr: string) => {
                if (curr === 'o') prev++;
                return prev;
            }, 0);

            console.log(700 + 100 * cnt);
        }
    }

    const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const func = new ProgramA(args);
    func.main();
}