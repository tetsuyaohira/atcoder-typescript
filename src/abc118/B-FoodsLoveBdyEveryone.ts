import * as fs from 'fs';

namespace AtCoder.abc118 {

    class ProgramB {
        inp: string[];

        // in
        // 3 4
        // 2 1 3
        // 3 1 2 3
        // 2 3 2
        // out
        // 1
        constructor(inp: string) {
            this.inp = inp.split('\n');
        }

        main() {
            const [n, m]: number[] = this.inp[0].split(' ').map(Number);
            this.inp.shift();

            let cnt: number = 0;
            for (let i: number = 1; i <= m; i++) { // 食べ物
                let flg = true;
                for (let j: number = 0; j < n; j++) { // 人
                    if (!this.inp[j].split(' ').map(Number).slice(1).some((x: number) => x == i)) {
                        flg = false;
                    }
                }
                if (flg) cnt++;
            }
            console.log(cnt);
        }
    }

    const args: string = fs.readFileSync('/dev/stdin', 'utf8').trim();
    const func = new ProgramB(args);
    func.main();
}