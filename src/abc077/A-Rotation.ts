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
            const [c1, c2, c3]: string[] = this.args[0][0].split('');
            const [c4, c5, c6]: string[] = this.args[1][0].split('');

            if (c1 === c6 && c2 === c5 && c3 === c4) {
                console.log('YES');
            } else {
                console.log('NO');
            }

        }
    }

    const args: string[][] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(r => r.split(' '));
    const task: AtCoder.Task = new TaskA(args);
    task.main();
}

