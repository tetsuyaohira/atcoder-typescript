import * as fs from 'fs';

namespace AtCoder.abc126 {

    class ProgramB {
        // 1905
        // YYMM
        //
        // 0112
        // AMBIGUOUS
        //
        // 1700
        // NA
        main(inp: string) {
            const s: number[] = inp.split('').map(Number);
            const s12: number = parseInt(s.slice(0, 2).join(''), 10);
            const s34: number = parseInt(s.slice(2, 4).join(''), 10);

            let yymm: boolean = true;
            let mmyy: boolean = true;

            if (s34 === 0) yymm = false;
            if (s34 >= 13) yymm = false;

            if (s12 === 0) mmyy = false;
            if (s12 >= 13) mmyy = false;

            if (yymm && mmyy) console.log('AMBIGUOUS');
            if (yymm && !mmyy) console.log('YYMM');
            if (!yymm && mmyy) console.log('MMYY');
            if (!yymm && !mmyy) console.log('NA');
        }
    }

    const func = new ProgramB();
    func.main(fs.readFileSync('/dev/stdin', 'utf8').trim());

}
