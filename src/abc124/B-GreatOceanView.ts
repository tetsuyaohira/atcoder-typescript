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
            const n: number = parseInt(this.args[0][0], 10);
            const h: number[] = this.args[1].map(Number);
            const wk: number[] = this.args[1].map(Number);
            const target: any = [];
            let ans: number = 0;
            h.forEach(x => {
                target.push(wk.shift());
                const max = Math.max(...target);
                if (x >= max) ans++;
            });
            console.log(ans);
        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
    const task: AtCoder.Task = new TaskA(args);
    task.main();
}

