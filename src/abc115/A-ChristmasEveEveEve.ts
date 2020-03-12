import * as fs from 'fs';

namespace AtCoder.abc115 {

    class Program {
        /**
         * in
         *  25
         * out
         *  Christmas
         */
        main(inp:string) {
            const days :any= {
                '22': 'Christmas Eve Eve Eve',
                '23': 'Christmas Eve Eve',
                '24': 'Christmas Eve',
                '25': 'Christmas',
            };
            console.log(days[inp]);
        }
    }

    const prg = new Program();
    prg.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
}
