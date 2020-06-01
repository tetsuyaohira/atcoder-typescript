import * as fs from 'fs';

namespace AtCoder {
    class ABC113 {
        /**
         * @param inp
         * 2
         * 12 5
         * 1000 2000
         */
        main(inp: string): void {
            // t-x*0.006
            const [t, a]: number[] = inp.split('\n')[1].split(' ').map(x => parseInt(x, 10));
            let ans: number = 0;
            let tmpAbs: number = 9999999;
            inp.split('\n')[2].split(' ').forEach((h, index) => {
                const abs: number = Math.abs(a - (t - parseInt(h) * 0.006));
                if (tmpAbs > abs) {
                    tmpAbs = abs;
                    ans = index + 1;
                }
            });
            console.log(ans);
        }
    }

    const func = new ABC113();
    func.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
}
