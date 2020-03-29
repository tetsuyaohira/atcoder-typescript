import * as fs from 'fs';

namespace AtCoder.abc099 {
    class ProgramA {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        main(): void {
            const n: number = parseInt(this.args[0], 10);
            if (n<1000){
                console.log('ABC');
            } else {
                console.log('ABD');
            }
        }
    }

    const args = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const func = new ProgramA(args)
    func.main();
}