import * as fs from 'fs';

namespace AtCoder.abc108 {

    class ProgramA {
        args: string[];

        // in 6
        // out 9
        // 1,2
        // 1,4
        // 1,6
        // 2,3
        // 2,5
        // 3,4
        // 3,6
        // 4,5
        // 5,6
        constructor(args: string[]) {
            this.args = args;
        }

        main(): void {
            const k: number = parseInt(args[0]);
            let ans: number = 0;
            for (let i = 1; i < k; i++) {
                for (let j = i; j <= k; j++) {
                    if (i % 2 === 0) { // 偶数
                        if (j > i && j % 2 === 1) {
                            ans++;
                        }
                    }
                    if (i % 2 === 1) { // 奇数
                        if (j > i && j % 2 === 0) {
                            ans++;
                        }
                    }
                }
            }
            console.log(ans);
        }
    }

    const args: string[] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
    const func = new ProgramA(args);
    func.main();
}
