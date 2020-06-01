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
            const nn: string = this.args[0][0];

            const n: number = +nn.slice(-1);
            if (n === 2 || n === 4 || n === 5 || n === 7 || n === 9) {
                console.log('hon');
            } else if (n === 0 || n === 1 || n === 6 || n === 8) {
                console.log('pon');
            } else if (n === 3) {
                console.log('bon');
            }

        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
    const task: AtCoder.Task = new TaskA(args);
    task.main();
}

