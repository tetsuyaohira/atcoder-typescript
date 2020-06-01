import * as fs from 'fs';

namespace AtCoder {
    export interface Paramable {
        readonly args: string[][];
    }

    export interface Task {
        main(this: Task): void;
    }
}

namespace AtCoder.abc001 {
    export class TaskA implements AtCoder.Task, AtCoder.Paramable {
        public constructor(public readonly args: string[][]) {
        }

        public main(this: TaskA): void {
            const [n, m, q]: number[] = this.args[0].map(Number);

            let ans: number = 0;

            for (let j = 0; j < Math.pow(10, n); j++) {
                let wk = 0;
                let aa: string = ('0000000000' + j).slice(-n);
                if (aa.indexOf(m.toString())>0) continue;

                for (let i = 1; i <= q; i++) {
                    const [a, b, c, d]: number[] = this.args[i].map(Number);
                    const length: number[] = aa.split('').map(Number);

                    if (length[b - 1] - length[a - 1] === c) {
                        wk += d;
                    }
                }
                if (ans < wk) ans = wk;
            }
            console.log(ans);
        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
    const task: AtCoder.Task = new TaskA(args);
    task.main();
}

