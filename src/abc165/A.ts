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
            const k: number = parseInt(this.args[0][0], 10);
            const a: number = +this.args[1][0];
            const b: number = +this.args[1][1];

            for (let i = a; i <= b; i++) {
                if (i%k===0){
                    console.log('OK');
                    return;
                }
            }

            console.log('NG');

        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
    const task: AtCoder.Task = new TaskA(args);
    task.main();
}

