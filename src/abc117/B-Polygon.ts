import * as fs from 'fs';

namespace AtCoder {
    export interface Pramable {
        args: string[][];
    }

    export interface Task {
        main(this: Task): void;
    }
}

namespace AtCoder.abc117 {
    export class TaskB implements AtCoder.Pramable, AtCoder.Task {
        constructor(public args: string[][]) {
        }

        public main(this: TaskB): void {

            const l: number[] = this.args[1].map(Number);
            const max: number = Math.max(...l);
            const sum: number = l.reduce((acc: number, cur: number) => acc + cur, 0);

            if (max < sum - max) {
                console.log('Yes');
            } else {
                console.log('No');
            }
        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(x => x.split(' '));
    const task: TaskB = new TaskB(args);
    task.main();
}