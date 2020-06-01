import * as fs from 'fs';

namespace AtCoder.abc130 {
    class ProgramB {
        args: string[];

        // 3 6
        // 3 4 5
        //
        // 2
        constructor(args: string[]) {
            this.args = args;
        }

        main(this: ProgramB) {

            const [n, x]: number[] = this.args[0].split(' ').map(Number);
            const l: number[] = this.args[1].split(' ').map(Number);

            let d: number = 0;
            let ans: number = 0;
            l.forEach((val: number) => {
                if (d <= x) ans++;
                d += val;
            });

            if (d <= x) ans++;


            console.log(ans);

        }
    }

    const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    new ProgramB(args).main();
}