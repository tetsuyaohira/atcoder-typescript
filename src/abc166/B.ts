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
            const [n, k]: number[] = this.args[0].map(Number);
            const set = new Set();

            for (let i = 2; i < k * 2+1; i = i + 2) {
                const val: number[] = this.args[i].map(Number);
                val.forEach(x => {
                    set.add(x)
                })
            }
            console.log(n - set.size);
        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
    const task: AtCoder.Task = new TaskA(args);
    task.main();
}

