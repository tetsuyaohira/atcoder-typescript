import * as fs from 'fs';

namespace AtCoder.abc075 {
    export class A {
        public main(args: string): void {

            let ans: number = 0;
            args.split('').reduce((prev: string, cur: string, idx: number) => {
                if (cur === 'S') return cur;
                if (ans === 0 && cur === 'R') {
                    ans++
                } else if (prev === 'R' && cur === 'R') {
                    ans++;
                }
                return cur;
            }, 'R');
            console.log(ans);
        }
    }

    const args: string = fs.readFileSync('/dev/stdin', 'utf8').trim();
    const task: AtCoder.abc075.A = new A();
    task.main(args);
}