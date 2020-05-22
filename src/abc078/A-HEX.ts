import * as fs from 'fs';

namespace AtCoder {
    export interface Paramable {
        readonly args: string[][];
    }

    export interface Task {
        main(this: Task): void;
    }
}

namespace AtCoder.abc078 {
    export class TaskA implements AtCoder.Task, AtCoder.Paramable {

        public constructor(public readonly args: string[][]) {

        }

        public main(this: TaskA): void {
            const [x, y]: string[] = this.args[0];

            if (x>y) {
                console.log('>');
            } else if (x<y) {
                console.log('<');
            } else {
                console.log('=');
            }

        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(x => x.split(' '));
    const task: AtCoder.Task = new TaskA(args);
    task.main();
}