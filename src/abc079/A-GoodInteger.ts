import * as fs from 'fs';

namespace AtCoder {
    export interface Paramable {
        readonly args: string[][];
    }

    export interface Task {
        main(this: Task): void;
    }
}

namespace AtCoder.abc079 {
    export class TaskA implements AtCoder.Task, AtCoder.Paramable {
        public constructor(public readonly args: string[][]) {
        }

        public main(this: TaskA): void {
            const n: number[] = this.args[0][0].split('').map(Number);
            if (n[0] === n[1] && n[1] === n[2]) {
                console.log('Yes');
            } else if (n[1] === n[2] && n[2] === n[3]) {
                console.log('Yes');
            } else {
                console.log('No');
            }
        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
    const task: AtCoder.Task = new TaskA(args);
    task.main();
}

