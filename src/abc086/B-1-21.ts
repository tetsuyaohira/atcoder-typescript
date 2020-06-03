import * as fs from 'fs';

namespace AtCoder {
    export interface Paramable {
        readonly args: string[][];
    }

    export interface Task {
        main(this: Task): void;
    }
}

namespace AtCoder.abc086 {
    export class TaskA implements AtCoder.Task, AtCoder.Paramable {
        public constructor(public readonly args: string[][]) {
        }

        public main(this: TaskA): void {
            const [a, b]: number[] = this.args[0].map(Number);
            const ab: number = parseInt(a.toString() + b.toString(), 10);
            console.log(Math.sqrt(ab) % 1 === 0 ? 'Yes' : 'No');
        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
    const task: TaskA = new TaskA(args);
    task.main();
}