import * as fs from 'fs';

namespace AtCoder.abc100 {
    export class ProgramA {
        args: string[];

        constructor(args: string[]) {
            this.args = args;
        }

        main() {
            const [a, b]: number[] = this.args[0].split(' ').map(Number);

            if (a > 8 || b > 8) {
                console.log(':(');
                return;
            }
            console.log('Yay!');
        }
    }
}

const args: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const func: AtCoder.abc100.ProgramA = new AtCoder.abc100.ProgramA(args);
func.main();
