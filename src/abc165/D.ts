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
            const [a, b, n]: number[] = this.args[0].map(Number);
            let ans: number = 0;
            let wk: number = 0;
            let x = 0;
            while (x < n) {
                x++;
                wk = Math.floor(a * x / b) - a * Math.floor(x / b);
                if (wk > ans) ans = wk;
            }
            console.log(ans);
        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
    const task: AtCoder.Task = new TaskA(args);
    task.main();
}

