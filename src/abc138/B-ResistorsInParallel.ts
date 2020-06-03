import * as fs from 'fs';

namespace AtCoder.abc138 {
    /**
     * 2
     * 10 30
     */
    class ProgramB {
        main(inp: string) {
            const aList: number[] = inp.split('\n')[1].split(' ').map(x => parseInt(x));

            let denominator: number =
                aList.reduce((accum, current) => accum += 1 / current, 0);

            console.log(1 / denominator);
        }
    }

    const func = new ProgramB();
    func.main(fs.readFileSync('/dev/stdin', 'utf8').trim())
}
