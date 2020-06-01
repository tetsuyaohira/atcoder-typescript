import * as fs from 'fs';


namespace AtCoder.abc125 {
    export class Program {
        // in
        // 4
        // 13 21 6 19
        // 11 30 6 15
        // out
        // 6
        static main(inp: string) {
            const n: number = parseInt(inp.split('\n')[0]);
            const v: number[] = inp.split('\n')[1].split(' ').map(Number);
            const c: number[] = inp.split('\n')[2].split(' ').map(Number);

            let ans: number = 0;
            v.forEach((val: number, idx: number) => {
                if (val > c[idx]) {
                    ans += (val - c[idx]);
                }
            });

            console.log(ans);
        }
    }
}

AtCoder.abc125.Program.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
