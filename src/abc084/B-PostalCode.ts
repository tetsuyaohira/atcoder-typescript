import * as fs from 'fs';

namespace AtCoder {
    export interface Paramable {
        args: string[][];
    }

    export interface Task {
        main(this: Task): void;
    }
}

namespace AtCoder.abc084 {
    export class TaskB implements AtCoder.Task, AtCoder.Paramable {
        public constructor(readonly args: string[][]) {
        }

        public main(this: TaskB): void {
            const [a, b]: number[] = this.args[0].map(Number);
            const reg = new RegExp(`^\\d{${a}}-\\d{${b}}$`);
            const result = reg.test(this.args[1][0]);
            const ans: string = result ? 'Yes' : 'No';
            console.log(ans);

        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
    const task: AtCoder.Task = new TaskB(args);
    task.main();
}